import React from 'react';

const PhotoItem = ({ src }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img
        src={src}
        alt="Gallery"
        className="w-full h-full object-cover rounded-xl shadow-md"
      />
    </div>
  );
};

export default PhotoItem;
