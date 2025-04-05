"use client";

import { useState } from 'react';
import { questions } from '@/data/questions';
import { specializations } from '@/data/specializations';

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [results, setResults] = useState<{id: string, score: number}[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

  const handleOptionSelect = (optionId: string) => {
    const newAnswers = [...answers, optionId];
    setAnswers(newAnswers);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate results
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (selectedOptions: string[]) => {
    // Initialize scores for each specialization
    const scores: {[key: string]: number} = {};
    specializations.forEach(spec => {
      scores[spec.id] = 0;
    });

    // Calculate scores based on selected options
    selectedOptions.forEach((optionId, qIndex) => {
      const question = questions[qIndex];
      const option = question.options.find(opt => opt.id === optionId);
      
      if (option) {
        option.specializations.forEach(spec => {
          scores[spec.id] += spec.weight;
        });
      }
    });

    // Convert to array and sort by score
    const resultsArray = Object.entries(scores).map(([id, score]) => ({
      id,
      score
    })).sort((a, b) => b.score - a.score);

    setResults(resultsArray);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResults([]);
    setShowResults(false);
    setSelectedSpecialization('');
  };

  const viewSpecializationDetails = (id: string) => {
    setSelectedSpecialization(id);
    setActiveTab('overview');
  };

  const currentQuestion = questions[currentQuestionIndex];
  const topSpecializations = results.slice(0, 3);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-3xl font-bold text-center mb-8">
          CSE Specialization Recommendation App
        </h1>

        {!showResults ? (
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 mb-8 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-white">
              Question {currentQuestionIndex + 1} of {questions.length}
            </h2>
            <p className="text-lg mb-6 text-gray-200">{currentQuestion.text}</p>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id)}
                  className="w-full text-left p-4 border border-gray-600 rounded-lg bg-gray-800 text-white hover:bg-gray-700 hover:border-blue-500 transition-colors"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-700">
            {!selectedSpecialization ? (
              <>
                <h2 className="text-2xl font-semibold mb-6 text-white">Your Top Recommended Specializations</h2>
                <div className="space-y-4">
                  {topSpecializations.map((result, index) => {
                    const spec = specializations.find(s => s.id === result.id);
                    return (
                      <div key={result.id} className="border border-gray-600 rounded-lg p-4 bg-gray-800 hover:shadow-lg transition-shadow">
                        <div className="flex justify-between items-center">
                          <h3 className="text-xl font-medium text-white">
                            {index + 1}. {spec?.name}
                          </h3>
                          <button
                            onClick={() => viewSpecializationDetails(result.id)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                          >
                            View Details
                          </button>
                        </div>
                        <p className="mt-2 text-gray-300">{spec?.description.substring(0, 120)}...</p>
                      </div>
                    );
                  })}
                </div>
                <button
                  onClick={resetQuiz}
                  className="mt-8 px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors"
                >
                  Start Over
                </button>
              </>
            ) : (
              <>
                {(() => {
                  const spec = specializations.find(s => s.id === selectedSpecialization);
                  return (
                    <div>
                      <button
                        onClick={() => setSelectedSpecialization('')}
                        className="mb-4 flex items-center text-blue-400 hover:text-blue-300"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Back to results
                      </button>
                      
                      <h2 className="text-2xl font-bold mb-4 text-white">{spec?.name}</h2>
                      <p className="text-gray-300 mb-6">{spec?.description}</p>
                      
                      {/* Tabs */}
                      <div className="border-b border-gray-700 mb-6">
                        <nav className="flex space-x-4">
                          <button 
                            onClick={() => setActiveTab('overview')}
                            className={`py-2 px-3 ${activeTab === 'overview' ? 'border-b-2 border-blue-500 text-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
                          >
                            Overview
                          </button>
                          <button 
                            onClick={() => setActiveTab('skills')}
                            className={`py-2 px-3 ${activeTab === 'skills' ? 'border-b-2 border-blue-500 text-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
                          >
                            Skills & Tools
                          </button>
                          <button 
                            onClick={() => setActiveTab('career')}
                            className={`py-2 px-3 ${activeTab === 'career' ? 'border-b-2 border-blue-500 text-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
                          >
                            Career
                          </button>
                        </nav>
                      </div>
                      
                      {/* Tab Content */}
                      {activeTab === 'overview' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-blue-900 p-4 rounded-lg border border-blue-700">
                            <h3 className="font-semibold text-lg mb-2 text-blue-300">Common Job Titles</h3>
                            <ul className="list-disc pl-5 space-y-1 text-gray-200">
                              {spec?.jobTitles.map(job => (
                                <li key={job}>{job}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="bg-green-900 p-4 rounded-lg border border-green-700">
                            <h3 className="font-semibold text-lg mb-2 text-green-300">Requirements</h3>
                            <ul className="list-disc pl-5 space-y-1 text-gray-200">
                              {spec?.requirements.map(req => (
                                <li key={req}>{req}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="bg-purple-900 p-4 rounded-lg border border-purple-700">
                            <h3 className="font-semibold text-lg mb-2 text-purple-300">Suitable For</h3>
                            <ul className="list-disc pl-5 space-y-1 text-gray-200">
                              {spec?.suitableFor.map(trait => (
                                <li key={trait}>{trait}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="bg-yellow-900 p-4 rounded-lg border border-yellow-700">
                            <h3 className="font-semibold text-lg mb-2 text-yellow-300">Average Salary</h3>
                            <p className="text-xl font-bold text-gray-200">{spec?.averageSalary}</p>
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 'skills' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-indigo-900 p-4 rounded-lg border border-indigo-700">
                            <h3 className="font-semibold text-lg mb-2 text-indigo-300">Key Skills</h3>
                            <ul className="list-disc pl-5 space-y-1 text-gray-200">
                              {spec?.skills.map(skill => (
                                <li key={skill}>{skill}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="bg-teal-900 p-4 rounded-lg border border-teal-700">
                            <h3 className="font-semibold text-lg mb-2 text-teal-300">Tools & Technologies</h3>
                            <ul className="list-disc pl-5 space-y-1 text-gray-200">
                              {spec?.tools.map(tool => (
                                <li key={tool}>{tool}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="bg-red-900 p-4 rounded-lg border border-red-700 md:col-span-2">
                            <h3 className="font-semibold text-lg mb-2 text-red-300">Challenges</h3>
                            <ul className="list-disc pl-5 space-y-1 text-gray-200">
                              {spec?.challenges.map(challenge => (
                                <li key={challenge}>{challenge}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 'career' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-emerald-900 p-4 rounded-lg border border-emerald-700 md:col-span-2">
                            <h3 className="font-semibold text-lg mb-2 text-emerald-300">Future Outlook</h3>
                            <p className="text-gray-200">{spec?.futureOutlook}</p>
                          </div>
                          
                          <div className="bg-amber-900 p-4 rounded-lg border border-amber-700 md:col-span-2">
                            <h3 className="font-semibold text-lg mb-2 text-amber-300">Recommended Certifications</h3>
                            <ul className="list-disc pl-5 space-y-1 text-gray-200">
                              {spec?.certifications.map(cert => (
                                <li key={cert}>{cert}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                      
                      <button
                        onClick={() => setSelectedSpecialization('')}
                        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Back to Results
                      </button>
                    </div>
                  );
                })()}
              </>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
