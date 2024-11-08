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