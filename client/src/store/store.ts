import { configureStore } from "@reduxjs/toolkit";

import { footer, scroll } from "@/store/features";

export const store = configureStore({
  reducer: {
    footer,
    scroll,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
