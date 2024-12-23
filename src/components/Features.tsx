import { MessageSquare, Brain, BarChart } from 'lucide-react';
import { Card } from './ui/Card';

const features = [
  {
    icon: MessageSquare,
    title: 'Real-time Analysis',
    description: 'Get instant sentiment analysis results for your tweets'
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Powered by advanced machine learning algorithms'
  },
  {
    icon: BarChart,
    title: 'Accurate Results',
    description: 'High accuracy predictions with confidence scores'
  }
];

export default function Features() {
  return (
    <div className="mt-16 grid md:grid-cols-3 gap-8">
      {features.map(({ icon: Icon, title, description }) => (
        <Card key={title}>
          <div className="flex flex-col items-center text-center">
            <Icon className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}