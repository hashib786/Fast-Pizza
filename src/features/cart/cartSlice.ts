import { createSlice } from "@reduxjs/toolkit";
import { CartI } from "../order/Order";

export type SliceState = {
  cart: CartI[];
};

const initialState: SliceState = { cart: [] };

const { actions, reducer } = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: { payload: CartI }) => {
      state.cart.push(action.payload);
    },
    deleteItem: (state, action: { payload: number }) => {
      state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    incrementItemQuantity: (state, action: { payload: number }) => {
      const item = state.cart.find((ele) => ele.pizzaId === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.unitPrice * item.quantity;
      }
    },
    decrementItemQuantity: (state, action: { payload: number }) => {
      const item = state.cart.find((ele) => ele.pizzaId === action.payload);
      if (item?.quantity === 1) {
        state.cart.filter((ele) => ele.pizzaId !== action.payload);
        return;
      }
      if (item) {
        item.quantity--;
        item.totalPrice = item.unitPrice * item.quantity;
      }
    },
    clearItem: (state) => {
      state.cart = [];
    },
  },
});

export default reducer;
export const {
  addItem,
  deleteItem,
  incrementItemQuantity,
  decrementItemQuantity,
  clearItem,
} = actions;

export const getTotalQuantity = (state: RootState) =>
  state.cart.cart.reduce((sum: number, curr) => sum + curr.quantity, 0);

export const getTotalPrice = (state: RootState) =>
  state.cart.cart.reduce((sum: number, curr) => sum + curr.totalPrice, 0);
