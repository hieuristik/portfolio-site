"use client";

import React, { useState } from 'react';
import PhotoItem from './PhotoItem';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const images = [
  '/images/gallery/01.jpg',
  '/images/gallery/02.jpg',
  '/images/gallery/03.jpg',
  '/images/gallery/04.jpg',
  '/images/gallery/05.jpg'
];

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto flex items-center">
      
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="p-3 rounded-full shadow-md bg-white hover:bg-gray-100 transition"
        style={{ marginRight: '1rem' }}
      >
        <ArrowLeft className="text-gray-800" />
      </button>

      {/* Photo Container */}
      <div className="flex-1 overflow-hidden rounded-xl shadow-lg">
        <PhotoItem src={images[currentIndex]} />
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="p-3 rounded-full shadow-md bg-white hover:bg-gray-100 transition"
        style={{ marginLeft: '1rem' }}
      >
        <ArrowRight className="text-gray-800" />
      </button>
    </div>
  );
};

export default PhotoGallery;
