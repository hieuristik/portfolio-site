// src/components/PhotoItem.js
"use client";
import Image from "next/image";
import React from "react";

export default function PhotoItem({ photo }) {
  return (
    <div className="w-full h-full flex items-center justify-center rounded-xl shadow-md">
      <a
        href={photo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
      >
        <div className="relative w-full h-full">
          {/* Parent must be relatively positioned for `fill` */}
          <Image
            src={photo.src}                 // e.g. '/images/gallery/01.jpg'
            alt={photo.alt || "Gallery Image"}
            fill                              // fills the parent box
            className="object-contain"        // no crop
            sizes="(max-width: 768px) 100vw, 900px"
            priority={false}
          />
        </div>
      </a>
    </div>
  );
}
