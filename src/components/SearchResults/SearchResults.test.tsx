import React from 'react';
import { render,screen } from '@testing-library/react';
import { useSearch, SearchProvider } from '../../context/SearchContext';
import SearchResults from './index';
import { SearchResult } from '../../types/types'

jest.mock('../../context/SearchContext');

describe('SearchResults', () => {
  const setQuery = jest.fn();
  const setResults = jest.fn();
  const query = '';
  const results: SearchResult[] = [];


  beforeEach(() => {
    (useSearch as jest.Mock).mockReturnValue({ query, setQuery, setResults, results });
  });

  it('displays initial message when no query is present', () => {
    render(
      <SearchProvider>
        <SearchResults />
      </SearchProvider>
    );

    expect(screen.getByText('Enter what you are looking for in the search above to make your search')).toBeInTheDocument();
  });

  it('displays loading message when isLoading is true', () => {
    (useSearch as jest.Mock).mockReturnValue({ query: 'test', setQuery, setResults, results });
    const useQuery = jest.fn().mockReturnValue({ isLoading: true });

    render(
      <SearchProvider>
        <SearchResults />
      </SearchProvider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays no results message when results are empty', () => {
    (useSearch as jest.Mock).mockReturnValue({ query: 'test', setQuery, setResults, results: [] });

    render(
      <SearchProvider>
        <SearchResults />
      </SearchProvider>
    );

    expect(screen.getByText('There are no results matching your query.')).toBeInTheDocument();
  });

  it('displays results when present', () => {
    const results = [
      { id: 1, title: 'Result 1', description: 'Description 1', category: 'Category 1', url: 'http://example.com' },
    ];
    (useSearch as jest.Mock).mockReturnValue({ query: 'test', setQuery, setResults, results });

    render(
      <SearchProvider>
        <SearchResults />
      </SearchProvider>
    );

    expect(screen.getByText('Result 1')).toBeInTheDocument();
  });
});
