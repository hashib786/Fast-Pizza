import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import cartSlice from "./cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
  },
});

// We can use RootState type in every file in project
declare global {
  type RootState = ReturnType<typeof store.getState>;
}

export default store;
