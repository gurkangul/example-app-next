export interface ICar {
  car: {
    name?: string;
    transmission?: string;
    brand?: {
      name: string;
    };
    class?: string;
    fuel?: string;
    image?: ImageType;
  };
  id: number;
  vendor: {
    logoUrl?: string;
    name?: string;
  };
  currency?: string;
  pricing: { totalPrice: number };
}

export type ImageType = {
  large?: string;
  medium?: string;
  small?: string;
};
