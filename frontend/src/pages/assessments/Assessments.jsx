import { useState } from 'react';
import { 
  BarChart, 
  TrendingUp, 
  Brain, 
  Moon, 
  Target,
  ArrowRight
} from 'lucide-react';

const metrics = [
  { name: 'Emotional Stability', value: 75, icon: Brain },
  { name: 'Trading Confidence', value: 65, icon: TrendingUp },
  { name: 'Sleep Quality', value: 80, icon: Moon },
  { name: 'FOMO Resistance', value: 70, icon: Target },
];

const Assessments = () => {
  const [selectedTab, setSelectedTab] = useState('results');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Weekly Assessment</h1>
          <p className="text-gray-600">Track your trading psychology progress</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Start Assessment
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setSelectedTab('results')}
          className={`px-4 py-2 rounded-lg ${
            selectedTab === 'results'
              ? 'bg-blue-100 text-blue-600'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Results
        </button>
        <button
          onClick={() => setSelectedTab('history')}
          className={`px-4 py-2 rounded-lg ${
            selectedTab === 'history'
              ? 'bg-blue-100 text-blue-600'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          History
        </button>
      </div>

      {selectedTab === 'results' ? (
        <>
          {/* Overall Score */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Overall Wellbeing Score
              </h2>
              <div className="flex items-center text-green-600">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>+5% from last week</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-3xl font-bold text-blue-600">72</span>
              </div>
              <div className="ml-6">
                <p className="text-gray-600">
                  Your trading psychology score shows improvement. Keep working on
                  your emotional discipline.
                </p>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.name}
                  className="bg-white rounded-lg shadow-sm p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="ml-3 font-medium text-gray-900">
                      {metric.name}
                    </h3>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-100">
                          {metric.value}%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
                      <div
                        style={{ width: `${metric.value}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Assessment History
            </h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm bg-gray-100 rounded-lg">
                Week
              </button>
              <button className="px-3 py-1 text-sm bg-gray-100 rounded-lg">
                Month
              </button>
              <button className="px-3 py-1 text-sm bg-gray-100 rounded-lg">
                Year
              </button>
            </div>
          </div>
          <div className="h-64 flex items-center justify-center text-gray-500">
            <BarChart className="w-6 h-6 mr-2" />
            Assessment history chart will be displayed here
          </div>
        </div>
      )}
    </div>
  );
};

export default Assessments;
