import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isScroll: false,
  isFix: false,
};

const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    black(state) {
      state.isScroll = true;
    },
    white(state) {
      state.isScroll = false;
    },
    fix(state) {
      state.isFix = true;
    },
    flex(state) {
      state.isFix = false;
    },
  },
});

export default scrollSlice.reducer;
export const { black, white, fix, flex } = scrollSlice.actions;
