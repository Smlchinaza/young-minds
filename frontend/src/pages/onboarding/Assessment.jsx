import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Mental health assessment questions for young people
const mentalHealthQuestions = [
  {
    id: 1,
    question: 'Over the past 2 weeks, how often have you felt down, depressed, or hopeless?',
    options: [
      'Not at all',
      'Several days',
      'More than half the days',
      'Nearly every day',
    ],
    category: 'mood'
  },
  {
    id: 2,
    question: 'Over the past 2 weeks, how often have you had little interest or pleasure in doing things?',
    options: [
      'Not at all',
      'Several days',
      'More than half the days',
      'Nearly every day',
    ],
    category: 'mood'
  },
  {
    id: 3,
    question: 'How often do you feel nervous, anxious, or on edge?',
    options: [
      'Not at all',
      'Several days',
      'More than half the days',
      'Nearly every day',
    ],
    category: 'anxiety'
  },
  {
    id: 4,
    question: 'How difficult is it for you to fall asleep or stay asleep?',
    options: [
      'Not difficult at all',
      'Somewhat difficult',
      'Very difficult',
      'Extremely difficult',
    ],
    category: 'sleep'
  },
  {
    id: 5,
    question: 'How would you rate your ability to focus on tasks or schoolwork?',
    options: [
      'Excellent',
      'Good',
      'Fair',
      'Poor',
    ],
    category: 'cognition'
  },
  {
    id: 6,
    question: 'How often do you feel overwhelmed by your responsibilities?',
    options: [
      'Rarely or never',
      'Sometimes',
      'Often',
      'Almost always',
    ],
    category: 'stress'
  },
  {
    id: 7,
    question: 'How would you rate your overall energy level?',
    options: [
      'Very high',
      'Somewhat high',
      'Somewhat low',
      'Very low',
    ],
    category: 'energy'
  },
  {
    id: 8,
    question: 'How often do you engage in activities you enjoy?',
    options: [
      'Daily',
      'Several times a week',
      'Once a week',
      'Rarely or never',
    ],
    category: 'engagement'
  },
  {
    id: 9,
    question: 'How would you rate your self-esteem?',
    options: [
      'Very high',
      'Somewhat high',
      'Somewhat low',
      'Very low',
    ],
    category: 'self-image'
  },
  {
    id: 10,
    question: 'How often do you feel lonely or isolated?',
    options: [
      'Rarely or never',
      'Sometimes',
      'Often',
      'Almost always',
    ],
    category: 'social'
  },
];

// Financial assessment questions for young people
const financialQuestions = [
  {
    id: 11,
    question: 'How would you rate your knowledge about personal finance?',
    options: [
      'Very knowledgeable',
      'Somewhat knowledgeable',
      'Not very knowledgeable',
      'Not knowledgeable at all',
    ],
    category: 'financial_literacy'
  },
  {
    id: 12,
    question: 'How often do you track your spending?',
    options: [
      'Daily',
      'Weekly',
      'Monthly',
      'Rarely or never',
    ],
    category: 'budgeting'
  },
  {
    id: 13,
    question: 'How comfortable are you with setting financial goals?',
    options: [
      'Very comfortable',
      'Somewhat comfortable',
      'Somewhat uncomfortable',
      'Very uncomfortable',
    ],
    category: 'goal_setting'
  },
  {
    id: 14,
    question: 'How often do you worry about money?',
    options: [
      'Rarely or never',
      'Sometimes',
      'Often',
      'Almost always',
    ],
    category: 'financial_anxiety'
  },
  {
    id: 15,
    question: 'Do you currently have any savings?',
    options: [
      'Yes, substantial savings',
      'Yes, some savings',
      'Very little savings',
      'No savings at all',
    ],
    category: 'savings'
  },
];

// Combine both question sets
const allQuestions = [...mentalHealthQuestions, ...financialQuestions];

const Assessment = () => {
  const navigate = useNavigate();
  const [assessmentType, setAssessmentType] = useState(null); // 'step-by-step' or 'form'
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [formAnswers, setFormAnswers] = useState({});
  const [activeSection, setActiveSection] = useState('mental'); // 'mental' or 'financial'
  
  // Handle step-by-step assessment
  const handleAnswer = (answer) => {
    setIsTransitioning(true);
    setAnswers((prev) => ({
      ...prev,
      [activeSection === 'mental' ? mentalHealthQuestions[currentQuestion].id : financialQuestions[currentQuestion].id]: answer,
    }));

    setTimeout(() => {
      const currentQuestionSet = activeSection === 'mental' ? mentalHealthQuestions : financialQuestions;
      
      if (currentQuestion < currentQuestionSet.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setIsTransitioning(false);
      } else if (activeSection === 'mental') {
        // Switch to financial section
        setActiveSection('financial');
        setCurrentQuestion(0);
        setIsTransitioning(false);
      } else {
        // Both sections completed
        // TODO: Save assessment results
        navigate('/dashboard');
      }
    }, 500);
  };

  // Handle form assessment input change
  const handleFormInputChange = (questionId, answer) => {
    setFormAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // TODO: Save assessment results
    navigate('/dashboard');
  };

  // Calculate progress for step-by-step assessment
  const totalQuestions = mentalHealthQuestions.length + financialQuestions.length;
  const completedQuestions = activeSection === 'mental' 
    ? currentQuestion 
    : mentalHealthQuestions.length + currentQuestion;
  const progress = ((completedQuestions + 1) / totalQuestions) * 100;

  // If assessment type not selected yet, show selection screen
  if (!assessmentType) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 px-4">
        <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-center text-purple-800 mb-6">Mental Health & Financial Assessment</h1>
          <p className="text-gray-600 mb-8 text-center">
            This assessment will help us understand your current mental health and financial situation, 
            so we can provide personalized resources and support.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button 
              onClick={() => setAssessmentType('step-by-step')}
              className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex flex-col items-center text-center"
            >
              <span className="text-xl font-semibold mb-2">Step-by-Step</span>
              <span className="text-sm">Answer one question at a time</span>
            </button>
            
            <button 
              onClick={() => setAssessmentType('form')}
              className="p-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex flex-col items-center text-center"
            >
              <span className="text-xl font-semibold mb-2">Complete Form</span>
              <span className="text-sm">View and answer all questions at once</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  // Step-by-step assessment view
  if (assessmentType === 'step-by-step') {
    const currentQuestionSet = activeSection === 'mental' ? mentalHealthQuestions : financialQuestions;
    const currentQuestionObj = currentQuestionSet[currentQuestion];
    
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 px-4">
        <div className="w-full max-w-2xl">
          {/* Section indicator */}
          <div className="flex justify-between mb-2">
            <span className={`font-medium ${activeSection === 'mental' ? 'text-blue-600' : 'text-gray-400'}`}>
              Mental Health Assessment
            </span>
            <span className={`font-medium ${activeSection === 'financial' ? 'text-blue-600' : 'text-gray-400'}`}>
              Financial Assessment
            </span>
          </div>
          
          {/* Progress bar */}
          <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            {/* Question */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              {currentQuestionObj.question}
            </h2>

            {/* Options */}
            <div className="space-y-4">
              {currentQuestionObj.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full p-4 text-left bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all duration-200"
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Question counter */}
            <p className="mt-8 text-center text-gray-600">
              Question {completedQuestions + 1} of {totalQuestions}
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  // Form assessment view
  return (
    <div className="min-h-screen py-10 bg-gradient-to-br from-blue-50 to-purple-50 px-4">
      <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center text-purple-800 mb-6">Comprehensive Assessment</h1>
          <p className="text-gray-600 mb-8 text-center">
            Please answer all questions honestly to help us provide you with the best support.
          </p>
          
          <form onSubmit={handleFormSubmit}>
            {/* Mental Health Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-blue-700 mb-4 pb-2 border-b border-gray-200">
                Mental Health Assessment
              </h2>
              
              <div className="space-y-6">
                {mentalHealthQuestions.map((q) => (
                  <div key={q.id} className="p-4 bg-blue-50 rounded-lg">
                    <p className="font-medium text-gray-800 mb-3">{q.question}</p>
                    <div className="grid grid-cols-2 gap-2 sm:flex sm:space-x-4">
                      {q.options.map((option, idx) => (
                        <label key={idx} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name={`question-${q.id}`}
                            value={option}
                            onChange={() => handleFormInputChange(q.id, option)}
                            className="form-radio text-blue-600"
                          />
                          <span className="text-sm text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Financial Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-purple-700 mb-4 pb-2 border-b border-gray-200">
                Financial Assessment
              </h2>
              
              <div className="space-y-6">
                {financialQuestions.map((q) => (
                  <div key={q.id} className="p-4 bg-purple-50 rounded-lg">
                    <p className="font-medium text-gray-800 mb-3">{q.question}</p>
                    <div className="grid grid-cols-2 gap-2 sm:flex sm:space-x-4">
                      {q.options.map((option, idx) => (
                        <label key={idx} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name={`question-${q.id}`}
                            value={option}
                            onChange={() => handleFormInputChange(q.id, option)}
                            className="form-radio text-purple-600"
                          />
                          <span className="text-sm text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                Submit Assessment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
