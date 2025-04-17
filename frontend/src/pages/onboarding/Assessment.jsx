import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    id: 1,
    question: 'How long have you been trading cryptocurrencies?',
    options: [
      'Less than 6 months',
      '6 months to 1 year',
      '1-3 years',
      'More than 3 years',
    ],
  },
  {
    id: 2,
    question: 'What is your primary goal in crypto trading?',
    options: [
      'Long-term investment',
      'Short-term trading',
      'Both long-term and short-term',
      'Still figuring it out',
    ],
  },
  {
    id: 3,
    question: 'How do you typically react to market volatility?',
    options: [
      'I panic and often make emotional decisions',
      'I get anxious but try to stick to my strategy',
      'I see it as an opportunity',
      'I remain calm and objective',
    ],
  },
  {
    id: 4,
    question: 'How often do you check crypto prices?',
    options: [
      'Multiple times per hour',
      'A few times per day',
      'Once per day',
      'A few times per week',
    ],
  },
  {
    id: 5,
    question: 'What aspect of trading affects you the most emotionally?',
    options: [
      'Fear of missing out (FOMO)',
      'Fear of loss',
      'Regret over past decisions',
      'Market uncertainty',
    ],
  },
];

const Assessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleAnswer = (answer) => {
    setIsTransitioning(true);
    setAnswers((prev) => ({
      ...prev,
      [questions[currentQuestion].id]: answer,
    }));

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setIsTransitioning(false);
      } else {
        // TODO: Save assessment results
        navigate('/dashboard');
      }
    }, 500);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 px-4">
      <div className="w-full max-w-2xl">
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
            {questions[currentQuestion].question}
          </h2>

          {/* Options */}
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
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
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
