import React from "react";

interface FeedbackButtonProps {
  position?: "bottom-right" | "bottom-left";
  onClick?: () => void;
}

export const FeedbackButton: React.FC<FeedbackButtonProps> = ({ position = "bottom-right", onClick }) => {
  const positionStyles = {
    "bottom-right": "right-4 bottom-4",
    "bottom-left": "left-4 bottom-4",
  };

  return (
    <button
      className={`fixed ${positionStyles[position]} bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-all`}
      onClick={onClick}
    >
      <span>Feedback</span>
    </button>
  );
};
