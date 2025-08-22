"use client";

import React, { useState, useEffect } from "react";
import PhotoItem from "./PhotoItem";
import PHOTOS from "@/data/photosList";

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === PHOTOS.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // 8 seconds

    return () => clearInterval(interval); // clean up on unmount
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Slide viewport */}
      <div
        className="relative w-full overflow-hidden rounded-xl shadow-lg"
        style={{ aspectRatio: "16 / 9" }}
      >
        {/* track */}
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {PHOTOS.map((photo, idx) => (
            <div
              key={idx}
              className="relative basis-full shrink-0 grow-0 h-full flex items-center justify-center"
            >
              <PhotoItem photo={photo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
