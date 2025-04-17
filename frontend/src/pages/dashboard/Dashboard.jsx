import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  BookOpen, 
  Calendar,
  PlusCircle,
  TrendingUp,
  TrendingDown,
  Smile,
  Meh,
  Frown
} from 'lucide-react';

const emotions = [
  { name: 'Positive', icon: Smile, color: 'text-green-500' },
  { name: 'Neutral', icon: Meh, color: 'text-yellow-500' },
  { name: 'Negative', icon: Frown, color: 'text-red-500' },
];

const quickActions = [
  { name: 'Check-in', icon: PlusCircle, path: '/check-in', color: 'bg-blue-500' },
  { name: 'Community', icon: Users, path: '/community', color: 'bg-purple-500' },
  { name: 'Resources', icon: BookOpen, path: '/resources', color: 'bg-green-500' },
  { name: 'Assessment', icon: BarChart3, path: '/assessments', color: 'bg-orange-500' },
];

const recentActivity = [
  {
    type: 'trade',
    title: 'Successful Trade',
    description: 'Maintained emotional discipline during market volatility',
    icon: TrendingUp,
    color: 'text-green-500',
    time: '2 hours ago',
  },
  {
    type: 'emotion',
    title: 'Emotion Check-in',
    description: 'Feeling confident but cautious',
    icon: Smile,
    color: 'text-blue-500',
    time: '4 hours ago',
  },
  {
    type: 'trade',
    title: 'Learning Moment',
    description: 'Identified FOMO trigger and avoided impulsive trade',
    icon: TrendingDown,
    color: 'text-yellow-500',
    time: '6 hours ago',
  },
];

const Dashboard = () => {
  const [currentEmotion, setCurrentEmotion] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, Alex</h1>
        <p className="text-gray-600">Let's check in on your trading mindset today</p>
      </div>

      {/* Emotion Tracker */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">How are you feeling today?</h2>
        <div className="flex space-x-4">
          {emotions.map((emotion) => {
            const Icon = emotion.icon;
            return (
              <button
                key={emotion.name}
                onClick={() => setCurrentEmotion(emotion.name)}
                className={`flex flex-col items-center p-4 rounded-lg transition-all ${
                  currentEmotion === emotion.name
                    ? 'bg-gray-100 scale-105'
                    : 'hover:bg-gray-50'
                }`}
              >
                <Icon className={`w-8 h-8 ${emotion.color}`} />
                <span className="mt-2 text-sm text-gray-600">{emotion.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.name}
              to={action.path}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`p-3 rounded-full ${action.color}`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-900">
                {action.name}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Today's Focus */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-sm p-6 mb-8 text-white">
        <h2 className="text-lg font-semibold mb-2">Today's Focus</h2>
        <p className="mb-4">Practice mindful trading by setting clear entry and exit points before making any trades.</p>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors">
          Learn More
        </button>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Activity</h2>
          <Link to="/activity" className="text-blue-600 text-sm hover:underline">
            View All
          </Link>
        </div>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className={`p-2 rounded-full bg-gray-100`}>
                  <Icon className={`w-5 h-5 ${activity.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
