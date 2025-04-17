import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { ArrowRight, Brain, Heart, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Emotional Intelligence',
    description: 'Learn to understand and manage your trading emotions effectively',
  },
  {
    icon: Heart,
    title: 'Mental Wellbeing',
    description: 'Maintain psychological balance during market volatility',
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Connect with traders who understand your challenges',
  },
  {
    icon: Shield,
    title: 'Safe Space',
    description: 'Share experiences and learn in a judgment-free environment',
  },
];

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* <Navbar /> */}
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Trade with clarity,
              <br />
              not emotion
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Young Minds is your companion in developing a resilient trading psychology.
              We help you master your emotions and make better trading decisions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/auth"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/auth?mode=login"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Journey to Trading Mastery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine psychology expertise with trading experience to help you develop
              a resilient trading mindset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg"
                >
                  <div className="inline-flex p-3 bg-blue-100 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Trading Psychology?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of traders who are mastering their emotions and improving
            their trading decisions.
          </p>
          <Link
            to="/auth"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
