import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

// We can use RootState type in every file in project
declare global {
  type RootState = ReturnType<typeof store.getState>;
}

export default store;
