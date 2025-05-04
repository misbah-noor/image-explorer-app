import React from 'react'

function ImageCard({ img }) {
    return (
        <img
          src={img.urls.small}
          alt={img}
          className="w-full h-65 object-cover rounded-lg shadow-md hover:scale-105 transition-all ease-in-out duration-300"
        />
      
    );
  }
  
  export default ImageCard;
  