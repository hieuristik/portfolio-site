import React from "react";

export default function PhotoItem({ photo }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <a
        href={photo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
      >
        <img
          src={photo.src} // ensure leading slash if in /public: "/images/gallery/01.jpg"
          alt={photo.alt || "Gallery Image"}
          className="block mx-auto w-auto h-auto max-w-full max-h-full object-contain transition-transform duration-500 ease-in-out hover:scale-105"
          style={{ objectFit: "contain", objectPosition: "center" }} // defeats any global 'cover'
        />
      </a>
    </div>
  );
}
