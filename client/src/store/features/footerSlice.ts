import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isToggle: true,
};

const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {
    show(state) {
      state.isToggle = true;
    },
    hide(state) {
      state.isToggle = false;
    },
  },
});

export default footerSlice.reducer;
export const { show, hide } = footerSlice.actions;
