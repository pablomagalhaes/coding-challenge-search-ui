import "./index.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SearchProvider } from './context/SearchContext';

import Home from "./pages/home";

const queryClient = new QueryClient();

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <SearchProvider>
                <Home />
            </SearchProvider>
        </QueryClientProvider>
    );
}

export default App;
