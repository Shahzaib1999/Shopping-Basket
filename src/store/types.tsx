export type CartItem = {
  id: String;
  name: String;
  image: String;
  price: Number;
  date: String;
};

export type State = {
  cart: CartItem[];
  total: Number
};
