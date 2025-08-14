"use client";
import React, { useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import VideoItem from "./VideoItem";

const videos = [
  {
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Intro to BrewinLang",
  },
  {
    src: "https://www.youtube.com/embed/5NV6Rdv1a3I",
    title: "Behind the Code",
  },
  {
    src: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    title: "Project Showcase Reel",
  },
];

export default function VideoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
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
        src={videos[currentIndex].src}
        title={videos[currentIndex].title}
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
