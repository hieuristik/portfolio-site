import React from 'react';

const PhotoItem = ({ src }) => {
  return (
    <div className="w-full h-[500px]">
      <img
        src={src}
        alt="Gallery Item"
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  );
};

export default PhotoItem;
