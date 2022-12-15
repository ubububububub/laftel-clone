import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "first",
    status: "empty",
  },
  {
    name: "second",
    status: "empty",
  },
  {
    name: "third",
    status: "empty",
  },
  {
    name: "fourth",
    status: "empty",
  },
  {
    name: "fifth",
    status: "empty",
  },
];

const star = createSlice({
  name: "star",
  initialState,
  reducers: {
    firstEmpty(state) {
      state[0].status = "empty";
      state[1].status = "empty";
      state[2].status = "empty";
      state[3].status = "empty";
      state[4].status = "empty";
    },
    firstHalf(state) {
      state[0].status = "half";
      state[1].status = "empty";
      state[2].status = "empty";
      state[3].status = "empty";
      state[4].status = "empty";
    },
    firstFull(state) {
      state[0].status = "full";
      state[1].status = "empty";
      state[2].status = "empty";
      state[3].status = "empty";
      state[4].status = "empty";
    },
    secondEmpty(state) {
      state[0].status = "full";
      state[1].status = "empty";
      state[2].status = "empty";
      state[3].status = "empty";
      state[4].status = "empty";
    },
    secondHalf(state) {
      state[0].status = "full";
      state[1].status = "half";
      state[2].status = "empty";
      state[3].status = "empty";
      state[4].status = "empty";
    },
    secondFull(state) {
      state[0].status = "full";
      state[1].status = "full";
      state[2].status = "empty";
      state[3].status = "empty";
      state[4].status = "empty";
    },
    thirdEmpty(state) {
      state[0].status = "full";
      state[1].status = "full";
      state[2].status = "empty";
      state[3].status = "empty";
      state[4].status = "empty";
    },
    thirdHalf(state) {
      state[0].status = "full";
      state[1].status = "full";
      state[2].status = "half";
      state[3].status = "empty";
      state[4].status = "empty";
    },
    thirdFull(state) {
      state[0].status = "full";
      state[1].status = "full";
      state[2].status = "full";
      state[3].status = "empty";
      state[4].status = "empty";
    },
    fourthEmpty(state) {
      state[0].status = "full";
      state[1].status = "full";
      state[2].status = "full";
      state[3].status = "empty";
      state[4].status = "empty";
    },
    fourthHalf(state) {
      state[0].status = "full";
      state[1].status = "full";
      state[2].status = "full";
      state[3].status = "half";
      state[4].status = "empty";
    },
    fourthFull(state) {
      state[0].status = "full";
      state[1].status = "full";
      state[2].status = "full";
      state[3].status = "full";
      state[4].status = "empty";
    },
    fifthEmpty(state) {
      state[0].status = "full";
      state[1].status = "full";
      state[2].status = "full";
      state[3].status = "full";
      state[4].status = "empty";
    },
    fifthHalf(state) {
      state[0].status = "full";
      state[1].status = "full";
      state[2].status = "full";
      state[3].status = "full";
      state[4].status = "half";
    },
    fifthFull(state) {
      state[0].status = "full";
      state[1].status = "full";
      state[2].status = "full";
      state[3].status = "full";
      state[4].status = "full";
    },
    allEmpty(state) {
      state[0].status = "empty";
      state[1].status = "empty";
      state[2].status = "empty";
      state[3].status = "empty";
      state[4].status = "empty";
    },
  },
});

export default star.reducer;
export const {
  firstEmpty,
  firstHalf,
  firstFull,
  secondEmpty,
  secondHalf,
  secondFull,
  thirdEmpty,
  thirdHalf,
  thirdFull,
  fourthEmpty,
  fourthHalf,
  fourthFull,
  fifthEmpty,
  fifthHalf,
  fifthFull,
  allEmpty,
} = star.actions;
