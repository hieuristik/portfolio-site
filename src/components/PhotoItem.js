// PhotoItem.jsx
import Image from "next/image";

export default function PhotoItem({ src, alt = "", onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-full h-full flex justify-center items-center cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
    >
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={600}
        className="rounded-2xl shadow-xl object-contain max-h-[80vh] w-full"
      />
    </div>
  );
}
