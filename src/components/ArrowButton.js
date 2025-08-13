// ArrowButton.jsx
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ArrowButton({ direction = "left", onClick }) {
  const Icon = direction === "left" ? ArrowLeft : ArrowRight;
  const positionClass = direction === "left" ? "left-4" : "right-4";

  return (
    <button
      onClick={onClick}
      className={`hidden md:flex items-center justify-center absolute ${positionClass} z-10 bg-white rounded-full p-3 shadow-lg hover:scale-110 transition`}
    >
      <Icon size={28} />
    </button>
  );
}
