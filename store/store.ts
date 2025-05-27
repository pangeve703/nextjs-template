import { configureStore } from "@reduxjs/toolkit";
import { commonSlice } from "./common/slice";
import { User } from "./user";

export const store = configureStore({
  reducer: {
    common: commonSlice.reducer,
    user: User.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
