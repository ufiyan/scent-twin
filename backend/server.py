from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage

# Load environment variables
load_dotenv()

app = FastAPI()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request model for fragrance generation
class FragranceRequest(BaseModel):
    biometrics: dict
    intent: str
    familyKey: str
    familyName: str
    familyIngredients: dict
    geneProfile: dict

@app.get("/api/")
async def root():
    return {"message": "Scent Twin API - L'Oréal Hackathon 2025"}

@app.post("/api/generate-fragrance")
async def generate_fragrance(request: FragranceRequest):
    """
    Proxy endpoint for AI fragrance generation using Emergent LLM key
    Prevents CORS issues and protects API key
    """
    try:
        biometrics = request.biometrics
        intent = request.intent
        family_name = request.familyName
        ingredients = request.familyIngredients
        gene_profile = request.geneProfile
        
        # Build the system prompt
        system_prompt = "You are a master perfumer and luxury brand storyteller for L'Oréal. You speak in elegant, evocative luxury language. Every response should feel like a high-end fragrance house brochure — poetic, precise, and confident."
        
        # Build the user prompt
        user_prompt = f"""Create a bespoke fragrance for this individual:

Biometric State:
- Stress level: {biometrics.get('stress', 5)}/10
- Energy level: {biometrics.get('energy', 5)}/10
- Body warmth: {biometrics.get('bodyWarmth', 5)}/10
- Sleep quality: {biometrics.get('sleepQuality', 5)}/10
- Activity today: {biometrics.get('activity', 5)}/10

Intent Mode: {intent} ({
    'seeking positive energy and uplifted emotional state' if intent == 'experiential' 
    else 'asserting self-confidence and projecting unique signature' if intent == 'identity'
    else 'dressing the energy of a specific event'
})

Fragrance Family: {family_name}
Ingredient Pool:
- Top notes: {', '.join(ingredients.get('top', []))}
- Heart notes: {', '.join(ingredients.get('heart', []))}
- Base notes: {', '.join(ingredients.get('base', []))}

Genetic Profile Scores: {gene_profile.get('scores', {})}

Return ONLY valid JSON with this exact schema:
{{
  "scentName": "A poetic fragrance name (2-4 words, luxury brand style)",
  "tagline": "One sentence in italics capturing the essence",
  "story": "2-3 sentences of evocative luxury storytelling",
  "topNotes": ["ingredient1", "ingredient2", "ingredient3"],
  "heartNotes": ["ingredient1", "ingredient2", "ingredient3"],
  "baseNotes": ["ingredient1", "ingredient2"],
  "concentration": "{gene_profile.get('concentration', 'Eau de Parfum')}",
  "ritual": "One sentence on when and how to wear this fragrance",
  "luxuryComparison": "Name one closest existing luxury fragrance"
}}"""
        
        # Initialize LLM chat with Emergent universal key
        chat = LlmChat(
            api_key=os.getenv("OPENAI_API_KEY"),
            session_id=f"fragrance-{intent}",
            system_message=system_prompt
        )
        
        # Configure to use OpenAI GPT-4o
        chat.with_model("openai", "gpt-4o")
        
        # Create user message
        user_message = UserMessage(text=user_prompt)
        
        # Send message and get response
        response = await chat.send_message(user_message)
        
        # The response is already a string, parse it as JSON
        import json
        
        # Try to parse the response - it should be JSON
        try:
            parsed_result = json.loads(response)
        except json.JSONDecodeError:
            # If response has extra text, try to extract JSON
            import re
            json_match = re.search(r'\{.*\}', response, re.DOTALL)
            if json_match:
                parsed_result = json.loads(json_match.group())
            else:
                raise ValueError(f"Could not parse JSON from response: {response[:200]}")
        
        return {
            "success": True,
            "data": parsed_result
        }
        
    except Exception as e:
        print(f"AI Generation Error: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Failed to generate fragrance: {str(e)}"
        )

@app.get("/api/health")
async def health():
    return {"status": "healthy", "service": "Scent Twin API"}
