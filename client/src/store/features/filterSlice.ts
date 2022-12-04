import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "@/store";

export const filterStatus = {
  READY: "ready",
  CORRECT: "correct",
  INCORRECT: "incorrect",
};

interface Item {
  id: number;
  title: string;
  status: string;
  type: string;
}

interface InitialState {
  filters: {
    title: string;
    item: Item[];
  }[];
  genres: Item[];
  notGenres: Item[];
  tags: Item[];
  notTags: Item[];
}

const initialState: InitialState = {
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
        { id: 12, title: "성인", status: filterStatus.READY, type: "genre" },
        { id: 13, title: "스릴러", status: filterStatus.READY, type: "genre" },
        { id: 14, title: "스포츠", status: filterStatus.READY, type: "genre" },
        { id: 15, title: "시대물", status: filterStatus.READY, type: "genre" },
        { id: 16, title: "아동", status: filterStatus.READY, type: "genre" },
        { id: 17, title: "아이돌", status: filterStatus.READY, type: "genre" },
        { id: 18, title: "액션", status: filterStatus.READY, type: "genre" },
        { id: 19, title: "음식", status: filterStatus.READY, type: "genre" },
        { id: 20, title: "음악", status: filterStatus.READY, type: "genre" },
        { id: 21, title: "이세계", status: filterStatus.READY, type: "genre" },
        { id: 22, title: "일상", status: filterStatus.READY, type: "genre" },
        { id: 23, title: "재난", status: filterStatus.READY, type: "genre" },
        { id: 24, title: "추리", status: filterStatus.READY, type: "genre" },
        { id: 25, title: "치유", status: filterStatus.READY, type: "genre" },
        { id: 26, title: "특촬", status: filterStatus.READY, type: "genre" },
        { id: 27, title: "판타지", status: filterStatus.READY, type: "genre" },
        { id: 28, title: "하렘", status: filterStatus.READY, type: "genre" },
      ],
    },
    {
      title: "태그",
      item: [
        { id: 29, title: "가족", status: filterStatus.READY, type: "tag" },
        { id: 30, title: "감동", status: filterStatus.READY, type: "tag" },
        { id: 31, title: "게임", status: filterStatus.READY, type: "tag" },
        { id: 32, title: "동물", status: filterStatus.READY, type: "tag" },
        { id: 33, title: "동양풍", status: filterStatus.READY, type: "tag" },
        { id: 34, title: "두뇌싸움", status: filterStatus.READY, type: "tag" },
        { id: 35, title: "로봇", status: filterStatus.READY, type: "tag" },
        { id: 36, title: "루프물", status: filterStatus.READY, type: "tag" },
        { id: 37, title: "마법소녀", status: filterStatus.READY, type: "tag" },
        { id: 38, title: "먼치킨", status: filterStatus.READY, type: "tag" },
        { id: 39, title: "무거움", status: filterStatus.READY, type: "tag" },
        { id: 40, title: "배틀", status: filterStatus.READY, type: "tag" },
        { id: 41, title: "뱀파이어", status: filterStatus.READY, type: "tag" },
        { id: 42, title: "복수", status: filterStatus.READY, type: "tag" },
        { id: 43, title: "삼각관계", status: filterStatus.READY, type: "tag" },
        { id: 44, title: "서양풍", status: filterStatus.READY, type: "tag" },
        { id: 45, title: "선생님", status: filterStatus.READY, type: "tag" },
        { id: 46, title: "성장", status: filterStatus.READY, type: "tag" },
        { id: 47, title: "슬픔", status: filterStatus.READY, type: "tag" },
        { id: 48, title: "시간여행", status: filterStatus.READY, type: "tag" },
        { id: 49, title: "역하렘", status: filterStatus.READY, type: "tag" },
        { id: 50, title: "연예인", status: filterStatus.READY, type: "tag" },
        { id: 51, title: "열혈", status: filterStatus.READY, type: "tag" },
        { id: 52, title: "오타쿠", status: filterStatus.READY, type: "tag" },
        {
          id: 53,
          title: "요괴 및 괴물",
          status: filterStatus.READY,
          type: "tag",
        },
        { id: 54, title: "육아", status: filterStatus.READY, type: "tag" },
        { id: 55, title: "정치", status: filterStatus.READY, type: "tag" },
        { id: 56, title: "좀비", status: filterStatus.READY, type: "tag" },
        {
          id: 57,
          title: "주체적 여성",
          status: filterStatus.READY,
          type: "tag",
        },
        { id: 58, title: "짝사랑", status: filterStatus.READY, type: "tag" },
        { id: 59, title: "철학", status: filterStatus.READY, type: "tag" },
        { id: 60, title: "퇴마", status: filterStatus.READY, type: "tag" },
        { id: 61, title: "학교", status: filterStatus.READY, type: "tag" },
      ],
    },
  ],
  genres: [],
  notGenres: [],
  tags: [],
  notTags: [],
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
    addGenre(state, action) {
      const genre = state.filters[0].item.find(
        ({ id }) => id === action.payload.id,
      );

      if (!genre) {
        return state;
      }

      state.genres.push(genre);
    },
    subtractGenre(state, action) {
      const genre = state.genres.filter(({ id }) => id !== action.payload.id);

      state.genres = genre;
    },
    addNotGenre(state, action) {
      const genre = state.filters[0].item.find(
        ({ id }) => id === action.payload.id,
      );

      if (!genre) {
        return state;
      }

      state.notGenres.push(genre);
    },
    subtractNotGenre(state, action) {
      const genre = state.notGenres.filter(
        ({ id }) => id !== action.payload.id,
      );

      state.notGenres = genre;
    },
    addTag(state, action) {
      const tag = state.filters[1].item.find(
        ({ id }) => id === action.payload.id,
      );

      if (!tag) {
        return state;
      }

      state.tags.push(tag);
    },
    subtractTag(state, action) {
      const tag = state.tags.filter(({ id }) => id !== action.payload.id);

      state.tags = tag;
    },
    addNotTag(state, action) {
      const tag = state.filters[1].item.find(
        ({ id }) => id === action.payload.id,
      );

      if (!tag) {
        return state;
      }

      state.notTags.push(tag);
    },
    subtractNotTag(state, action) {
      const tag = state.notTags.filter(({ id }) => id !== action.payload.id);

      state.notTags = tag;
    },
  },
});

export default filterSlice.reducer;
export const {
  updateReady,
  updateCorrect,
  updateInCorrect,
  addGenre,
  subtractGenre,
  addNotGenre,
  subtractNotGenre,
  addTag,
  subtractTag,
  addNotTag,
  subtractNotTag,
} = filterSlice.actions;
export const getFilterSliceState = (state: RootState) => state.filter;
