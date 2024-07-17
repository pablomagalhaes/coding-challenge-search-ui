import { render, fireEvent, screen } from '@testing-library/react';
import { useSearch, SearchProvider } from '../../context/SearchContext';
import SearchBar from './index';

jest.mock('../context/SearchContext');

describe('SearchBar', () => {
  const setQuery = jest.fn();
  const setResults = jest.fn();
  beforeEach(() => {
    (useSearch as jest.Mock).mockReturnValue({ setQuery, setResults });
  });

  it('triggers search on Enter key press', () => {
    render(
      <SearchProvider>
        <SearchBar />
      </SearchProvider>
    );

    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'test query' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(setQuery).toHaveBeenCalledWith('test query');
  });

  it('triggers search on button click', () => {
    render(
      <SearchProvider>
        <SearchBar />
      </SearchProvider>
    );

    const input = screen.getByPlaceholderText('Search...');
    const button = screen.getByText('Search');

    fireEvent.change(input, { target: { value: 'test query' } });
    fireEvent.click(button);

    expect(setQuery).toHaveBeenCalledWith('test query');
  });

  it('clears results when input is cleared', () => {
    render(
      <SearchProvider>
        <SearchBar />
      </SearchProvider>
    );

    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: '' } });

    expect(setResults).toHaveBeenCalledWith([]);
  });
});
