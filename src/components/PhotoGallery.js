"use client";

import React, { useState } from "react";
import PhotoItem from "./PhotoItem";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PHOTOS from "@/data/photosList";

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex((i) => (i === 0 ? PHOTOS.length - 1 : i - 1));
  const next = () =>
    setCurrentIndex((i) => (i === PHOTOS.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full max-w-5xl mx-auto flex items-center">
      {/* Left Arrow */}
      <button
        onClick={prev}
        className="p-3 rounded-full shadow-md bg-white hover:bg-gray-100 transition z-10 mr-4"
      >
        <ArrowLeft className="text-gray-800" />
      </button>

      {/* Slide viewport */}
      <div
        className="relative w-full overflow-hidden rounded-xl shadow-lg"
        style={{ aspectRatio: "16 / 9" }}   // hard guarantee the height
      >
        {/* track */}
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {PHOTOS.map((photo, idx) => (
            // each slide takes full viewport width
            <div
              key={idx}
              className="relative basis-full shrink-0 grow-0 h-full flex items-center justify-center"
            >
              <PhotoItem photo={photo} />
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="p-3 rounded-full shadow-md bg-white hover:bg-gray-100 transition z-10 ml-4"
      >
        <ArrowRight className="text-gray-800" />
      </button>
    </div>
  );
}
