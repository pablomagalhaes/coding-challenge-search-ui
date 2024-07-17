import axios from 'axios';
import { SearchResult } from '../types/types';

export async function search(query: string): Promise<SearchResult[]> {
  if (!query) return [];

  const response = await axios.get<SearchResult[]>(`/api/data?search=${encodeURIComponent(query)}`);
  if (response.status !== 200) {
    throw new Error('Network response was not ok');
  }
  return response.data;
}
