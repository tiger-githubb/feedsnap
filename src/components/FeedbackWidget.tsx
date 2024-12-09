import React, { useState } from "react";
import { FeedbackConfig } from "../types/feedback";
import { FeedbackButton } from "./FeedbackButton";
import { FeedbackModal } from "./FeedbackModal";

interface FeedbackWidgetProps {
  config: FeedbackConfig;
}

export const FeedbackWidget: React.FC<FeedbackWidgetProps> = ({ config }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FeedbackButton position={config.position} onClick={() => setIsOpen(true)} />
      {isOpen && <FeedbackModal config={config} onClose={() => setIsOpen(false)} />}
    </>
  );
};
