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
  id: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  link: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}