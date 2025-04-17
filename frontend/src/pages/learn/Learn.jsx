import { BookOpen, PlayCircle, Award, ChevronRight } from 'lucide-react';

const Learn = () => {
  const courses = [
    {
      id: 1,
      title: 'Financial Basics 101',
      description: 'Learn the fundamentals of personal finance and money management',
      level: 'Beginner',
      modules: 5,
      duration: '2 hours',
      category: 'Fundamentals',
      icon: BookOpen,
    },
    {
      id: 2,
      title: 'Smart Budgeting',
      description: 'Master the art of budgeting and expense tracking',
      level: 'Intermediate',
      modules: 4,
      duration: '1.5 hours',
      category: 'Budgeting',
      icon: PlayCircle,
    },
    {
      id: 3,
      title: 'Investment Fundamentals',
      description: 'Understanding different investment options and strategies',
      level: 'Advanced',
      modules: 6,
      duration: '3 hours',
      category: 'Investing',
      icon: Award,
    },
  ];

  const categories = [
    'All',
    'Fundamentals',
    'Budgeting',
    'Saving',
    'Investing',
    'Credit',
    'Taxes',
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Learn & Grow</h1>
        <p className="text-gray-600">Expand your financial knowledge with our curated courses</p>
      </div>

      {/* Categories */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-4 pb-2">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 text-sm font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <course.icon className="w-6 h-6 text-blue-600" />
                </div>
                <span className={`text-sm font-medium px-3 py-1 rounded-full 
                  ${course.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                    course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'}`}>
                  {course.level}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{course.modules} Modules</span>
                <span>{course.duration}</span>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t">
              <button className="w-full flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
                Start Learning <ChevronRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Tips Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Financial Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: '50/30/20 Rule',
              tip: 'Allocate 50% of your income to needs, 30% to wants, and 20% to savings.',
            },
            {
              title: 'Emergency Fund',
              tip: 'Aim to save 3-6 months of living expenses for unexpected situations.',
            },
            {
              title: 'Debt Management',
              tip: 'Pay off high-interest debt first while maintaining minimum payments on others.',
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.tip}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learn;
