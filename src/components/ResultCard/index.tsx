import React from 'react';
import { SearchResult } from '../../types/types';
// UI Components
import Badge from '../ui/Badge';

interface ResultCardProps extends SearchResult {}

const ResultCard: React.FC<ResultCardProps> = ({ id, title, description, category, url }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg" data-testid="search-result">
      <a href={url} data-testid="search-result-title" target="_blank" rel="noopener noreferrer">
        <h2 className="text-xl font-bold mb-2 text-blue-600 hover:underline">{title}</h2>
      </a>
      <p data-testid="search-result-description">{description}</p>
      <Badge data-testid="search-result-category">{category}</Badge>
    </div>
  );
};

export default ResultCard;
