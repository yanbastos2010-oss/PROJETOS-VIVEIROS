export interface BenefitItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface SampleProject {
  id: string;
  code: string;
  title: string;
  tags: string[];
  description: string;
  estimatedCost: string;
  blueprintDetails: {
    area: string;
    capacity: string;
    structureType: string;
    ventilation: string;
  };
}

export interface BonusItem {
  id: string;
  number: number;
  title: string;
  description: string;
  originalPrice: string;
  discountedPrice: string;
}

export interface Testimonial {
  id: string;
  author: string;
  quote: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  popular?: boolean;
  features: {
    text: string;
    included: boolean;
    isBonus?: boolean;
  }[];
  originalPrice: string;
  price: string;
  buttonText: string;
  highlightColor?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
