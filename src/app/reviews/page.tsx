import type { Metadata } from "next";
import { ReviewsIndexClient } from "@/components/ReviewsIndexClient";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "NookVolt product review catalog — phones, laptops, monitors, audio, watches, and accessories with sourced buying summaries.",
};

export default function ReviewsPage() {
  return <ReviewsIndexClient />;
}
