import React, { useState } from "react";
import { useFeedback } from "../hooks/useFeedback";
import { FeedbackConfig, FeedbackData } from "../types/feedback";

interface FeedbackModalProps {
  config: FeedbackConfig;
  onClose: () => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ config, onClose }) => {
  const { submitFeedback, isLoading, error } = useFeedback(config.apiKey);

  const [feedback, setFeedback] = useState<FeedbackData>({
    message: "",
    email: "",
    rating: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitFeedback(feedback);
      onClose();
    } catch (err) {
      // Error est déjà géré par le hook
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{config.title || "Send Feedback"}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Your feedback</label>
            <textarea
              className="w-full border rounded-md p-2"
              rows={4}
              value={feedback.message}
              onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email (optional)</label>
            <input
              type="email"
              className="w-full border rounded-md p-2"
              value={feedback.email}
              onChange={(e) => setFeedback({ ...feedback, email: e.target.value })}
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
              style={{ backgroundColor: config.primaryColor }}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Feedback"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
