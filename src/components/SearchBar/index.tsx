import React, { useState } from 'react';
import { useSearch } from '../../context/SearchContext';
import { useQueryClient } from '@tanstack/react-query';
// UI Components
import Input from '../ui/Input';
import Button from '../ui/Button';

const SearchBar: React.FC = () => {
  const { setQuery, setResults } = useSearch();
  const [inputValue, setInputValue] = useState('');
  const queryClient = useQueryClient();

  const handleSearch = () => {
    if (inputValue.trim() !== '') {
      setQuery(inputValue);
      queryClient.invalidateQueries({ queryKey: ['searchResults'] });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.trim() === '') {
      setQuery('');
      setResults([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-center p-4 w-full max-w-2xl">
      <Input
        data-testid="search-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
        className="border p-2 rounded-lg mr-2 w-full"
      />
      <Button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600" data-testid="search-button">
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
