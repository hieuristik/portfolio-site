import React from 'react';

const PhotoItem = ({ photo }) => {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-xl shadow-md">
      <a
        href={photo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
      >
        <img
          src={photo.src}
          alt={photo.alt || 'Gallery Image'}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </a>
    </div>
  );
};

export default PhotoItem;
