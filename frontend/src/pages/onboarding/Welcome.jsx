import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Users, Shield, LineChart } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Assessment',
    description: 'Get personalized insights about your emotional responses to market conditions',
  },
  {
    icon: Users,
    title: 'Specialized Therapists',
    description: 'Connect with professionals who understand the unique challenges of trading',
  },
  {
    icon: LineChart,
    title: 'Continuous Support',
    description: 'Ongoing guidance through market volatility and career transitions',
  },
  {
    icon: Shield,
    title: 'Absolute Privacy',
    description: 'Bank-level security and confidentiality for all your data and sessions',
  },
];

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              MindSync: Mental Clarity
              <br />
              for Financial Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              In the fast-paced world of financial markets, your mental wellbeing is your greatest asset.
              We provide specialized mental health support tailored for investors and traders like you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/auth"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Schedule AI Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/auth?mode=login"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Browse Our Therapists
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
              How MindSync Works For You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The markets don't stop, and neither does your mind. We offer the mental health tools
              and support you need to perform at your best.
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

      {/* Testimonial Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <blockquote className="text-xl italic text-gray-900">
            "MindSync has been invaluable during volatile market periods. Having a therapist who understands
            trading psychology has completely transformed my approach to risk."
          </blockquote>
          <p className="mt-4 text-gray-600">- MindSync Member, Hedge Fund Analyst</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Your Mind, Your Edge
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            The most successful investors know that mental clarity leads to better financial decisions.
            Start your MindSync journey today and transform your relationship with the markets.
          </p>
          <Link
            to="/auth"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Begin Your Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
