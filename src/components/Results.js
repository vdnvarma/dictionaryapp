// src/components/Results.js
function Results({ data, searchInitiated }) {
    // Show nothing if search hasn't been initiated
    if (!searchInitiated) {
      return null;
    }
  
    // If no data, show error message
    if (!data) {
      return (
        <div className="mt-8 bg-zinc-800 shadow-md rounded-lg p-6 w-4/5 md:w-2/3 lg:w-1/2 mx-auto">
          <p className="text-red-500 text-xl font-bold text-center">
            No results found. Please try another word.
          </p>
        </div>
      );
    }
  
    // Display the word details if data is found
    return (
      <div className="mt-8 bg-zinc-800 shadow-md rounded-lg p-6 w-4/5 md:w-2/3 lg:w-1/2 mx-auto">
        <h2 className="text-2xl text-white font-bold mb-4">{data.word}</h2>
        <div className="text-white">
          <h4 className="text-lg font-semibold">Part of Speech:</h4>
          <p className="mb-4">{data.meanings[0]?.partOfSpeech || "N/A"}</p>
          <h4 className="text-lg font-semibold">Definition:</h4>
          <p className="mb-4">
            {data.meanings[0]?.definitions[0]?.definition || "No definition available."}
          </p>
          <h4 className="text-lg font-semibold">Example:</h4>
          <p>
            {data.meanings[0]?.definitions[0]?.example || "No example available."}
          </p>
        </div>
      </div>
    );
  }
  
  export default Results;
  