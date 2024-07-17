import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSearch } from '../../context/SearchContext';
import ResultCard from '../ResultCard';
import { ErrorBoundary } from 'react-error-boundary';
import { SearchResult } from '../../types/types';
import { search } from '../../services/searchService';

const SearchResults: React.FC = () => {
  const { query, setResults, results } = useSearch();
  const { data, error, isLoading } = useQuery<SearchResult[], Error>({
    queryKey: ['searchResults', query],
    queryFn: () => search(query),
    enabled: !!query,
  });

  useEffect(() => {
    if (data) {
      setResults(data);
    }
  }, [data, setResults]);

  if (!query) {
    return (
      <div className="p-4 text-center w-full max-w-2xl">
        <p>Type what you are looking for in the search bar above.</p>
      </div>
    );
  }

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching results: {error.message}</p>;

  if (results.length === 0) {
    return (
      <div className="p-4 text-center w-full max-w-2xl">
        <p>There are no results matching your query.</p>
      </div>
    );
  }

  return (
    <ErrorBoundary FallbackComponent={() => <p>Something went wrong</p>}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {data?.map((result) => (
          <ResultCard 
            key={result.id} 
            id={result.id} 
            title={result.title}
            description={result.description}
            category={result.category}
            url={result.url}
          />
        ))}
      </div>
    </ErrorBoundary>
  );
};

export default SearchResults;
