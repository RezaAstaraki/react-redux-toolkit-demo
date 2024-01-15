// const sliceCreator = require("@reduxjs/toolkit").createSlice;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCake: 10,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState: initialState,
  reducers: {
    orderCake: (state) => {
      state.numOfCake--;
    },
    restockCake: (state, action) => {
      state.numOfCake += action.payload;
    },
  },
});

// module.exports = cakeSlice.reducer;
export default cakeSlice.reducer;
// module.exports.actions = cakeSlice.actions;
export const { orderCake, restockCake } = cakeSlice.actions;
