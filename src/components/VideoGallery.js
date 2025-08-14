"use client";
import React, { useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
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
    <div className="flex flex-col items-center justify-center space-y-4">
      <button
        onClick={handlePrev}
        className="p-2 bg-white shadow-md rounded-full hover:bg-gray-100 transition"
      >
        <ArrowUp className="text-gray-800" />
      </button>

      <VideoItem
        src={VIDEOS[currentIndex].src}
        title={VIDEOS[currentIndex].title}
      />

      <button
        onClick={handleNext}
        className="p-2 bg-white shadow-md rounded-full hover:bg-gray-100 transition"
      >
        <ArrowDown className="text-gray-800" />
      </button>
    </div>
  );
}
