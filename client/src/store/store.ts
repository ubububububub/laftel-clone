import { configureStore } from "@reduxjs/toolkit";

import { footer } from "@/store/slices";

export const store = configureStore({
  reducer: {
    footer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
