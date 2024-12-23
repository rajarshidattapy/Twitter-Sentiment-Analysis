from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from ..models.sentiment_model import SentimentModel

router = APIRouter()
model = SentimentModel()

class TweetRequest(BaseModel):
    text: str

class SentimentResponse(BaseModel):
    sentiment: int
    confidence: float

@router.post("/analyze", response_model=SentimentResponse)
async def analyze_sentiment(request: TweetRequest):
    try:
        result = model.predict(request.text)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))