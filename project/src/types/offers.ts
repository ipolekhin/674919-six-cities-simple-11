export type Offer = {
  id: number;
  image: string;
  images: string[];
  isPremium: boolean;
  price: number;
  title: string;
  type: string;
  rating: number;
};

export type Offers = Offer[];
