import SearchBar from '../../components/SearchBar';
import SearchResults from '../../components/SearchResults';

const Home: React.FC = () => {

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-full max-w-2xl p-4 flex flex-col items-center">
        <SearchBar  />
        <SearchResults />
      </div>
    </div>  
  );
}

export default Home;