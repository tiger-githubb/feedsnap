export interface FeedbackConfig {
  apiKey: string;
  primaryColor?: string;
  position?: "bottom-right" | "bottom-left";
  title?: string;
  subtitle?: string;
}

export interface FeedbackData {
  message: string;
  email?: string;
  rating?: number;
  metadata?: Record<string, unknown>;
}
