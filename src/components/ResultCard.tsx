import React from 'react';
import { Specialization } from '@/data/specializations';

interface ResultCardProps {
  specialization: Specialization;
  rank: number;
  onViewDetails: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ specialization, rank, onViewDetails }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium">
          {rank}. {specialization.name}
        </h3>
        <button
          onClick={onViewDetails}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          View Details
        </button>
      </div>
      <p className="mt-2 text-gray-600">{specialization.description.substring(0, 120)}...</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {specialization.jobTitles.slice(0, 2).map((job, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {job}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ResultCard;
