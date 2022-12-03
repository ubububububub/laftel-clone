import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "@/store";

export const filterStatus = {
  READY: "ready",
  CORRECT: "correct",
  INCORRECT: "incorrect",
};

const initialState = {
  filters: [
    {
      title: "장르",
      item: [
        { id: 1, title: "BL", status: filterStatus.READY, type: "genre" },
        { id: 2, title: "GL 백합", status: filterStatus.READY, type: "genre" },
        { id: 3, title: "SF", status: filterStatus.READY, type: "genre" },
        { id: 4, title: "개그", status: filterStatus.READY, type: "genre" },
        { id: 5, title: "공포", status: filterStatus.READY, type: "genre" },
        { id: 6, title: "드라마", status: filterStatus.READY, type: "genre" },
        { id: 7, title: "로맨스", status: filterStatus.READY, type: "genre" },
        { id: 8, title: "모험", status: filterStatus.READY, type: "genre" },
        { id: 9, title: "무협", status: filterStatus.READY, type: "genre" },
        {
          id: 10,
          title: "미스터리",
          status: filterStatus.READY,
          type: "genre",
        },
        { id: 11, title: "범죄", status: filterStatus.READY, type: "genre" },
      ],
    },
    {
      title: "태그",
      item: [
        { id: 12, title: "가족", status: filterStatus.READY, type: "tag" },
        { id: 13, title: "감동", status: filterStatus.READY, type: "tag" },
        { id: 14, title: "게임", status: filterStatus.READY, type: "tag" },
        { id: 15, title: "동물", status: filterStatus.READY, type: "tag" },
        { id: 16, title: "동양풍", status: filterStatus.READY, type: "tag" },
        { id: 17, title: "두뇌싸움", status: filterStatus.READY, type: "tag" },
        { id: 18, title: "로봇", status: filterStatus.READY, type: "tag" },
        { id: 19, title: "루프물", status: filterStatus.READY, type: "tag" },
        { id: 20, title: "마법소녀", status: filterStatus.READY, type: "tag" },
        { id: 21, title: "먼치킨", status: filterStatus.READY, type: "tag" },
        { id: 22, title: "무거움", status: filterStatus.READY, type: "tag" },
      ],
    },
  ],
  filterTags: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateReady(state, action) {
      const typeIndex = action.payload.type === "genre" ? 0 : 1;

      const filterIndex = state.filters[typeIndex].item.findIndex(
        el => el.id === action.payload.id,
      );
      state.filters[typeIndex].item[filterIndex] = {
        ...state.filters[typeIndex].item[filterIndex],
        status: "ready",
      };
    },
    updateCorrect(state, action) {
      const typeIndex = action.payload.type === "genre" ? 0 : 1;

      const filterIndex = state.filters[typeIndex].item.findIndex(
        el => el.id === action.payload.id,
      );
      state.filters[typeIndex].item[filterIndex] = {
        ...state.filters[typeIndex].item[filterIndex],
        status: "correct",
      };
    },
    updateInCorrect(state, action) {
      const typeIndex = action.payload.type === "genre" ? 0 : 1;

      const filterIndex = state.filters[typeIndex].item.findIndex(
        el => el.id === action.payload.id,
      );
      state.filters[typeIndex].item[filterIndex] = {
        ...state.filters[typeIndex].item[filterIndex],
        status: "incorrect",
      };
    },
  },
});

export default filterSlice.reducer;
export const { updateReady, updateCorrect, updateInCorrect } =
  filterSlice.actions;
export const getFilterSliceState = (state: RootState) => state.filter;
