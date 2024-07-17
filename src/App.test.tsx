import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SearchProvider } from './context/SearchContext';
import App from './App';

test('should render Home component within QueryClientProvider and SearchProvider', () => {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <App />
      </SearchProvider>
    </QueryClientProvider>
  );
  expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
});
