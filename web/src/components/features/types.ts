import type { ReactNode } from "react";

export type FeatureTone = "lavender" | "peach" | "mint" | "cream";

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  visual?: ReactNode;
  tone?: FeatureTone;
}

export interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
}
