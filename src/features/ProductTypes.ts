export interface ProductType {
  id: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
  total_price :number
}
