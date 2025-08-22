"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import VideoItem from "./VideoItem";
import VIDEOS from "@/data/videosList";

export default function VideoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? VIDEOS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === VIDEOS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="p-3 rounded-full shadow-md bg-white hover:bg-gray-100 transition z-10 mr-4"
      >
        <ArrowLeft className="text-gray-800" />
      </button>

      {/* Video container */}
      <div className="w-full max-w-4xl flex justify-center items-center">
        <VideoItem
          src={VIDEOS[currentIndex].src}
          title={VIDEOS[currentIndex].title}
        />
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="p-3 rounded-full shadow-md bg-white hover:bg-gray-100 transition z-10 ml-4"
      >
        <ArrowRight className="text-gray-800" />
      </button>
    </div>
  );
}
