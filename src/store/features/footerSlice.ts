import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "@/store";

const initialState = {
  isFooterToggle: true,
};

const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {
    showFooter(state) {
      state.isFooterToggle = true;
    },
    hideFooter(state) {
      state.isFooterToggle = false;
    },
  },
});

export default footerSlice.reducer;
export const { showFooter, hideFooter } = footerSlice.actions;
export const getFooteSliceState = (state: RootState) => state.footer;
