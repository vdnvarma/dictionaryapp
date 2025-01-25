import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import Axios from "axios";
import HomeButton from "./components/HomeButton";  // Import HomeButton component

function App() {
  const [data, setData] = useState(null);
  const [searchWord, setSearchWord] = useState("");
  const [searchInitiated, setSearchInitiated] = useState(false);  // New state

  // Reset function to clear the search and results
  const resetApp = () => {
    setSearchWord("");
    setData(null);
    setSearchInitiated(false);
  };

  const getMeaning = () => {
    if (searchWord.trim() === "") return;
    setSearchInitiated(true);  // Set to true when search is initiated
    Axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`
    )
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching word meaning:", error);
        setData(null);
      });
  };

  return (
    <div className="min-h-screen bg-zinc-900">
      <Header />
      <div className="flex justify-end mt-4 px-5">
        <HomeButton resetApp={resetApp} />
      </div>
      <SearchBar
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        getMeaning={getMeaning}
      />
      <Results data={data} searchInitiated={searchInitiated} />
    </div>
  );
}

export default App;
