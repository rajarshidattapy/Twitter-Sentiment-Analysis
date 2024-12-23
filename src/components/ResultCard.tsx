import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { Card } from './ui/Card';

interface ResultCardProps {
  sentiment: number;
  confidence: number;
}

export default function ResultCard({ sentiment, confidence }: ResultCardProps) {
  const isPositive = sentiment === 1;
  const sentimentColor = isPositive ? 'green' : 'red';
  const SentimentIcon = isPositive ? ThumbsUp : ThumbsDown;

  return (
    <Card className="w-full max-w-lg animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Analysis Result</h3>
        <SentimentIcon className={`text-${sentimentColor}-500`} size={24} />
      </div>
      <div className="space-y-4">
        <div>
          <p className="text-gray-600 mb-2">Sentiment</p>
          <p className={`text-lg font-medium text-${sentimentColor}-600`}>
            {isPositive ? 'Positive' : 'Negative'}
          </p>
        </div>
        <div>
          <p className="text-gray-600 mb-2">Confidence</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className={`h-2.5 rounded-full bg-${sentimentColor}-500 transition-all duration-500`}
              style={{ width: `${confidence * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            {(confidence * 100).toFixed(1)}%
          </p>
        </div>
      </div>
    </Card>
  );
}