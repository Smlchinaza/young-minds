import { 
  TrendingUp, 
  Brain, 
  Moon, 
  Scale,
  Heart,
  Clock,
  Bookmark,
  Share2
} from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Market Volatility Coping',
    icon: TrendingUp,
    description: 'Learn strategies to maintain emotional balance during market swings',
  },
  {
    id: 2,
    name: 'Trading Psychology Basics',
    icon: Brain,
    description: 'Understanding the psychological aspects of trading',
  },
  {
    id: 3,
    name: 'Sleep Improvement',
    icon: Moon,
    description: 'Tips for better sleep during active trading periods',
  },
  {
    id: 4,
    name: 'Balanced Perspective',
    icon: Scale,
    description: 'Maintaining objectivity in your trading decisions',
  },
  {
    id: 5,
    name: 'Healthy Boundaries',
    icon: Heart,
    description: 'Setting limits and managing trading addiction',
  },
];

const Resources = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Resource Library</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Explore Resources →
              </button>
            </div>
          );
        })}
      </div>

      {/* Featured Resource */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Featured Resource
        </h2>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-gray-100">
            {/* Placeholder for resource image */}
            <div className="w-full h-48 bg-gray-200" />
          </div>
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Clock className="w-4 h-4 mr-1" />
              <span>10 min read</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Managing FOMO in Bull Markets
            </h3>
            <p className="text-gray-600 mb-4">
              Learn effective strategies to control the fear of missing out during
              market uptrends and make more rational trading decisions.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="flex items-center text-gray-500 hover:text-blue-600">
                  <Bookmark className="w-4 h-4 mr-1" />
                  <span>Save</span>
                </button>
                <button className="flex items-center text-gray-500 hover:text-blue-600">
                  <Share2 className="w-4 h-4 mr-1" />
                  <span>Share</span>
                </button>
              </div>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Read Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
