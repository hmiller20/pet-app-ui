'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CloudBackground } from '@/sharedComponents/backgrounds';

// Mock survey template for UI demonstration
const MOCK_TEMPLATE = {
  title: "Pocket Sheep Survey",
  metadata: {
    description: "Help us improve your virtual pet experience"
  },
  questions: [
    {
      id: "enjoyment",
      text: "How much are you enjoying Pocket Sheep?",
      type: "multiple_choice",
      required: true,
      options: ["Love it!", "It's good", "It's okay", "Meh", "Don't like it"]
    },
    {
      id: "playFrequency",
      text: "How often do you play with your sheep?",
      type: "multiple_choice",
      required: true,
      options: ["Multiple times a day", "Once a day", "A few times a week", "Rarely"]
    },
    {
      id: "features",
      text: "What features do you like the most?",
      type: "checkbox",
      required: true,
      options: ["Feeding", "Playing", "Watching it grow", "Health care", "Story elements"]
    },
    {
      id: "improvements",
      text: "What could we improve?",
      type: "text",
      required: false,
      placeholder: "Share your suggestions..."
    }
  ]
};

export default function SurveyPage() {
  const router = useRouter();
  const [responses, setResponses] = useState<Record<string, any>>({});
  const [progress, setProgress] = useState(0);

  // Calculate progress
  useEffect(() => {
    const requiredQuestions = MOCK_TEMPLATE.questions.filter(q => q.required).length;
    const answeredRequired = Object.keys(responses).filter(key => 
      MOCK_TEMPLATE.questions.find(q => q.id === key)?.required
    ).length;
    setProgress((answeredRequired / requiredQuestions) * 100);
  }, [responses]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In UI version, just navigate back to menu
    router.push('/menu');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center p-8">
      <CloudBackground />
      
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-8 space-y-8 relative z-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-purple-800">
              {MOCK_TEMPLATE.title}
            </h1>
            <p className="text-gray-600 mt-2">
              {MOCK_TEMPLATE.metadata.description}
            </p>
          </div>
          <button
            onClick={() => router.push('/menu')}
            className="px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-xl transition-colors"
          >
            Back to Menu
          </button>
        </div>

        {/* Progress bar */}
        <div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-purple-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-sm text-gray-500 mt-1">
            Progress: {Math.round(progress)}%
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {MOCK_TEMPLATE.questions.map((question) => (
            <div key={question.id} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {question.text}
                {question.required && <span className="text-red-500 ml-1">*</span>}
              </h3>
              
              {question.type === 'text' ? (
                <textarea
                  value={responses[question.id] || ''}
                  onChange={(e) => setResponses(prev => ({
                    ...prev,
                    [question.id]: e.target.value
                  }))}
                  placeholder={question.placeholder}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-colors h-24 resize-none"
                />
              ) : (
                <div className="space-y-2">
                  {question.options.map((option) => (
                    <label key={option} className="flex items-center space-x-3">
                      <input
                        type={question.type === 'multiple_choice' ? 'radio' : 'checkbox'}
                        name={question.id}
                        value={option}
                        checked={question.type === 'multiple_choice' 
                          ? responses[question.id] === option
                          : (responses[question.id] || []).includes(option)
                        }
                        onChange={(e) => {
                          if (question.type === 'multiple_choice') {
                            setResponses(prev => ({
                              ...prev,
                              [question.id]: option
                            }));
                          } else {
                            setResponses(prev => ({
                              ...prev,
                              [question.id]: e.target.checked
                                ? [...(prev[question.id] || []), option]
                                : (prev[question.id] || []).filter((o: string) => o !== option)
                            }));
                          }
                        }}
                        className="text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md border-b-4 border-purple-700 hover:border-purple-800"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
} 