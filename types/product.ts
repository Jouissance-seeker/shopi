export type TProduct = {
  id: number;
  quantity: number;
  colors: string[];
  path: string;
  discount: number;
  priceWithoutDiscount: number;
  priceWithDiscount: number;
  title: {
    fa: string;
    en: string;
  };
  category: {
    text: string;
    path: string;
  };
  images: string[];
  description: string;
};
