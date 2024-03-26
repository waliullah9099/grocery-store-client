export type TProducts = {
  _id: string;
  title: string;
  description: string;
  previous_price?: number;
  new_price: number;
  rating: number;
  discount?: number;
  image: string;
  Deliver_days: number;
  Delivery_cost_inside: number;
  Delivery_cost_outside: number;
};
