import React from 'react'

function ShowMoreButton({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="mt-6 bg-gradient-to-r from-blue-500 border-none to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all mb-5"
      >
        Show More
      </button>
    );
  }
  
  export default ShowMoreButton;
  