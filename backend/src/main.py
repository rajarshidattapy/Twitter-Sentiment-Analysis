from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import sentiment

app = FastAPI(title="Twitter Sentiment Analysis API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routes
app.include_router(sentiment.router, prefix="/api/v1", tags=["sentiment"])