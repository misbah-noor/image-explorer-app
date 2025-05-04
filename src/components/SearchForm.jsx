import React from 'react'

function SearchForm({ keyword, setKeyword, onSearch }) {
    return (
      <form onSubmit={onSearch} className="flex mb-6">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search for images..."
          className="border-2 border-gray-300 rounded-l-lg p-2 w-64 focus:outline-none placeholder:text-white placeholder:text-lg text-xl"
        />
        <button
          type="submit"
          className="bg-white/90 text-pink-600 px-4 py-2 rounded-r-lg hover:bg-white hover:text-pink-700 border-none font-semibold transition"
        >
          Search
        </button>
      </form>
    );
  }
  
  export default SearchForm;
  