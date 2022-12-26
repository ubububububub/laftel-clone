import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "@/store";

const initialState = {
  isScroll: false,
  isFix: false,
};

const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    setBlack(state) {
      state.isScroll = true;
    },
    setWhite(state) {
      state.isScroll = false;
    },
    fixScroll(state) {
      state.isFix = true;
    },
    flexScroll(state) {
      state.isFix = false;
    },
  },
});

export default scrollSlice.reducer;
export const { setBlack, setWhite, fixScroll, flexScroll } =
  scrollSlice.actions;
export const getScrollSliceState = (state: RootState) => state.scroll;
