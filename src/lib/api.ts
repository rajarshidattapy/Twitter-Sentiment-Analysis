import { API_URL } from './config';
import { APIError, handleAPIError } from './errors';

export interface SentimentResponse {
  sentiment: number;
  confidence: number;
}

export async function analyzeSentiment(text: string): Promise<SentimentResponse> {
  try {
    const response = await fetch(`${API_URL}/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ detail: 'Unknown error' }));
      throw new APIError(error.detail || 'Failed to analyze sentiment', response.status);
    }

    return response.json();
  } catch (error) {
    throw handleAPIError(error);
  }
}