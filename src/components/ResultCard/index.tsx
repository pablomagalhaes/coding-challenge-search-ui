import React from 'react';
import { SearchResult } from '../../types/types';

interface ResultCardProps extends SearchResult {}

const ResultCard: React.FC<ResultCardProps> = ({ id, title, description, category, url }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <h2 className="text-xl font-bold mb-2 text-blue-600 hover:underline">{title}</h2>
      </a>
      <p>{description}</p>
      <span className="bg-stone-800 text-sm font-medium text-white shadow rounded-md h-9 px-4">{category}</span>
    </div>
  );
};

export default ResultCard;
