import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from './ui/Button';

interface TweetInputProps {
  onAnalyze: (tweet: string) => void;
  isLoading: boolean;
}

export default function TweetInput({ onAnalyze, isLoading }: TweetInputProps) {
  const [tweet, setTweet] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tweet.trim()) {
      onAnalyze(tweet);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      <div className="flex flex-col gap-2">
        <textarea
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          placeholder="Enter your tweet here to analyze its sentiment..."
          className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-32"
          maxLength={280}
        />
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {tweet.length}/280 characters
          </span>
          <Button 
            type="submit"
            disabled={isLoading || !tweet.trim()}
            isLoading={isLoading}
          >
            <Send size={18} />
            Analyze
          </Button>
        </div>
      </div>
    </form>
  );
}