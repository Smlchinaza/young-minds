import { useState } from 'react';
import { MessageCircle, ThumbsUp, Flag, PlusCircle } from 'lucide-react';

const categories = [
  { id: 1, name: 'Market Stress & Anxiety', count: 156, active: 23 },
  { id: 2, name: 'Trading Psychology', count: 234, active: 45 },
  { id: 3, name: 'Long-term Holder Support', count: 89, active: 12 },
  { id: 4, name: 'Crypto Addiction & FOMO', count: 167, active: 34 },
  { id: 5, name: 'Success Stories', count: 145, active: 28 },
];

const Community = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Community Forum</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <PlusCircle className="w-5 h-5 mr-2" />
          New Post
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all ${
              selectedCategory === category.id ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {category.name}
            </h3>
            <div className="flex items-center text-sm text-gray-600">
              <MessageCircle className="w-4 h-4 mr-1" />
              <span className="mr-4">{category.count} posts</span>
              <span>{category.active} active now</span>
            </div>
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="mt-8">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {categories.find((c) => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-gray-600">
                  A safe space to discuss and support each other
                </p>
              </div>
              <button className="text-blue-600 hover:text-blue-700">
                Sort by: Recent
              </button>
            </div>

            {/* Sample Thread */}
            <div className="border-t border-gray-100 pt-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gray-200" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    How do you handle market dips emotionally?
                  </h3>
                  <p className="text-gray-600 mt-1">
                    I've been struggling with anxiety during market downturns. Would love to hear how others cope...
                  </p>
                  <div className="flex items-center space-x-4 mt-4">
                    <button className="flex items-center text-gray-500 hover:text-blue-600">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      <span>24</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-blue-600">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span>12 replies</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-red-600">
                      <Flag className="w-4 h-4 mr-1" />
                      <span>Report</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;
