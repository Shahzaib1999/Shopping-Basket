import { createSlice } from "@reduxjs/toolkit";

import { CartItem, State } from "./types";

export const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    cart: [],
    total: 0,
  },
  reducers: {
    add: (state: State, action) => {
      state.cart = [...state.cart, action.payload];
      state.total = state.total + action.payload.price;
    },
    remove: (state: State, action) => {
      let filter = state.cart.filter((c: CartItem) => c.id !== action.payload);
      state.total = +state.total - +state.cart.filter((c: CartItem) => c.id === action.payload)[0].price;
      state.cart = filter;
    },
    empty: (state: State) => {
      state.total = 0;
      state.cart = []
    },
  },
});

export default CartSlice.reducer;
export const { add, remove, empty } = CartSlice.actions;
