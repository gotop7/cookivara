import type { Metadata } from "next";
import { ComparisonsIndexClient } from "@/components/ComparisonsIndexClient";

export const metadata: Metadata = {
  title: "Comparisons",
  description:
    "NookVolt side-by-side comparisons — phones, laptops, and audio with sourced editorial summaries.",
};

export default function ComparisonsPage() {
  return <ComparisonsIndexClient />;
}
