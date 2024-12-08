declare module "feedsnap-sdk" {
  import { FC } from "react";

  export interface FeedbackConfig {
    apiKey: string;
    primaryColor?: string;
    position?: "bottom-right" | "bottom-left";
    title?: string;
  }

  export interface FeedbackData {
    message: string;
    email?: string;
    rating?: number;
  }

  export interface FeedbackWidgetProps {
    config: FeedbackConfig;
  }

  export const FeedbackWidget: FC<FeedbackWidgetProps>;
}
