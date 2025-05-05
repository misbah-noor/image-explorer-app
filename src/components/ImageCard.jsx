import React from 'react'

function ImageCard({ image }) {
    return (
      <a href={image.links.html} target='_blank' rel='noreferrer'>
        <img
          src={image.urls.small}
          alt={image}
          className="w-full h-65 object-cover rounded-lg shadow-md hover:scale-105 transition-all ease-in-out duration-300"
        />
      </a>
       
      
    );
  }
  
  export default ImageCard;
  