import { FaSearch } from "react-icons/fa";

function SearchBar({ searchWord, setSearchWord, getMeaning }) {
  const handleSearchClick = () => {
    if (searchWord.trim() === "") {
      alert("Please enter a word to search!");
    } else {
      getMeaning();
    }
  };

  return (
    <div className="flex justify-center mt-8 text-white">
      <div className="flex items-center bg-transparent border-2 border-zinc-700 shadow-md rounded-lg overflow-hidden w-4/5 md:w-2/3 lg:w-1/2 h-12">
        <input
          type="text"
          className="w-full h-full px-4 text-lg outline-none bg-transparent border-none"
          placeholder="Search for a word..."
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <button
          onClick={handleSearchClick}
          className="h-full px-4 text-white bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition duration-300"
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
