import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ArrowButton({ direction, onClick }) {
  const Icon = direction === "left" ? ArrowLeft : ArrowRight;
  const positionClass = direction === "left" ? "left-4" : "right-4";

  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 ${positionClass} z-10 bg-white rounded-full p-3 shadow-lg hover:scale-110 transition`}
    >
      <Icon size={28} />
    </button>
  );
}
