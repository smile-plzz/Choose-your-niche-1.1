import React from 'react';
import { Specialization } from '@/data/specializations';

interface SpecializationDetailProps {
  specialization: Specialization;
  onBack: () => void;
}

const SpecializationDetail: React.FC<SpecializationDetailProps> = ({ specialization, onBack }) => {
  return (
    <div>
      <button
        onClick={onBack}
        className="mb-4 flex items-center text-blue-500 hover:text-blue-700"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to results
      </button>
      
      <h2 className="text-2xl font-bold mb-4">{specialization.name}</h2>
      <p className="text-gray-700 mb-6">{specialization.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Common Job Titles</h3>
          <ul className="list-disc pl-5 space-y-1">
            {specialization.jobTitles.map(job => (
              <li key={job}>{job}</li>
            ))}
          </ul>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Requirements</h3>
          <ul className="list-disc pl-5 space-y-1">
            {specialization.requirements.map(req => (
              <li key={req}>{req}</li>
            ))}
          </ul>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Suitable For</h3>
          <ul className="list-disc pl-5 space-y-1">
            {specialization.suitableFor.map(trait => (
              <li key={trait}>{trait}</li>
            ))}
          </ul>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Average Salary</h3>
          <p className="text-xl font-bold">{specialization.averageSalary}</p>
        </div>
      </div>
      
      <button
        onClick={onBack}
        className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Back to Results
      </button>
    </div>
  );
};

export default SpecializationDetail;
