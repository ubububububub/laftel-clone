import { configureStore } from "@reduxjs/toolkit";

import { footer, scroll, search, filter, star } from "@/store/features";

export const store = configureStore({
  reducer: {
    footer,
    scroll,
    search,
    filter,
    star,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
