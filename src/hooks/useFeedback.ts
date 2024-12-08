import { useState } from "react";
import { FeedbackData } from "../types/feedback";

export const useFeedback = (apiKey: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitFeedback = async (data: FeedbackData) => {
    setIsLoading(true);
    setError(null);

    try {
      // TODO: Implement actual API call
      const response = await fetch("https://api.feedsnap.com/v1/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }

      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    submitFeedback,
    isLoading,
    error,
  };
};
