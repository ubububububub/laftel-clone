import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "@/store";

const initialState = {
  isSearchShowing: false,
  searchText: "",
  isClearShowing: false,
};

const search = createSlice({
  name: "search",
  initialState,
  reducers: {
    showSearch(state) {
      state.isSearchShowing = true;
    },
    hideSearch(state) {
      state.isSearchShowing = false;
    },
    writeSearchText(state, action) {
      state.searchText = action.payload;
    },
    clearSearchText(state) {
      state.searchText = "";
    },
    showClear(state) {
      state.isClearShowing = true;
    },
    hideClear(state) {
      state.isClearShowing = false;
    },
  },
});

export default search.reducer;
export const {
  showSearch,
  hideSearch,
  writeSearchText,
  clearSearchText,
  showClear,
  hideClear,
} = search.actions;
export const getSearchSliceState = (state: RootState) => state.search;
