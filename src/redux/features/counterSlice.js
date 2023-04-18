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
      if (state.currentNumber === 1) {
        return;
      }
      state.currentNumber -= 1;
    },
    reset: (state) => {
      state.currentNumber = 1;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export const selectCount = (state) => state.counter.currentNumber;

export default counterSlice.reducer;
