const { createSlice } = require("@reduxjs/toolkit");

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    currentNumber: 1,
  },
  reducers: {
    increment: (state) => {
      state.currentNumber += 1;
    },
    decrement: (state) => {
      state.currentNumber -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export const selectCount = (state) => state.counter.currentNumber;

export default counterSlice.reducer;
