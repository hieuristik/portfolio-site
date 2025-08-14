"use client";
import React from "react";

export default function VideoItem({ src, title }) {
  return (
    <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
      <div className="aspect-video bg-black">
        <iframe
          width="100%"
          height="100%"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
}
