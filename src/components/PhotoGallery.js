"use client";

import React, { useState } from 'react';
import PhotoItem from './PhotoItem';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const photos = [
  {
    src: '/images/gallery/01.jpg',
    url: 'https://cdn.example.com/full/01.jpg',
    alt: 'Sunset on the beach'
  },
  {
    src: '/images/gallery/02.jpg',
    url: 'https://cdn.example.com/full/02.jpg',
    alt: 'Snowy cabin'
  },
  // Add more photo objects as needed
];

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto flex items-center overflow-hidden">
      
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="p-3 rounded-full shadow-md bg-white hover:bg-gray-100 transition z-10"
        style={{ marginRight: '1rem' }}
      >
        <ArrowLeft className="text-gray-800" />
      </button>

      {/* Slide Container */}
      <div className="relative w-full h-[500px] overflow-hidden rounded-xl shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {photos.map((photo, idx) => (
            <div key={idx} className="min-w-full h-full flex-shrink-0">
              <PhotoItem photo={photo} />
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="p-3 rounded-full shadow-md bg-white hover:bg-gray-100 transition z-10"
        style={{ marginLeft: '1rem' }}
      >
        <ArrowRight className="text-gray-800" />
      </button>
    </div>
  );
};

export default PhotoGallery;
