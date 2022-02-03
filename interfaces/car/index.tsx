export interface ICar {
  car: {
    name?: string;
    transmission?: string;
    brand?: {
      name: string;
    };
    class?: string;
    fuel?: string;
    image?: {
      large?: string;
      small?: string;
      medium?: string;
    };
  };
  id: number;
  vendor: {
    logoUrl?: string;
    name?: string;
  };
  currency?: string;
  pricing: { totalPrice: number };
}
