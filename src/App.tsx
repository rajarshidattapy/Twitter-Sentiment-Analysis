import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import TweetInput from './components/TweetInput';
import ResultCard from './components/ResultCard';
import Features from './components/Features';
import { analyzeSentiment } from './lib/api';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ sentiment: number; confidence: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (tweet: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await analyzeSentiment(tweet);
      setResult(result);
    } catch (error) {
      setError('Failed to analyze tweet. Please try again.');
      console.error('Error analyzing tweet:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageSquare size={32} className="text-blue-500" />
              <h1 className="text-3xl font-bold text-gray-900">
                Twitter Sentiment Analysis
              </h1>
            </div>
            <p className="text-gray-600">
              Analyze the sentiment of your tweets using machine learning
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-center gap-8">
            <TweetInput onAnalyze={handleAnalyze} isLoading={isLoading} />
            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}
            {result && <ResultCard {...result} />}
          </div>

          {/* Features */}
          <Features />
        </div>
      </div>
    </div>
  );
}