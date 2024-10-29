import { ReactNode } from 'react';

export interface NavItem {
  name: string;
  path: string;
}

export interface PricingFeature {
  text: string;
  icon: ReactNode;
}

export interface PricingPlan {
  duration: string;
  price: number;
  period: string;
  features: PricingFeature[];
}

export interface ContactMethodProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface BlogPost {
  id: number;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
  link: string;
}