// const { actions } = require("../cake/cakeSlice");
import { orderCake } from "../cake/cakeSlice";

// const sliceCreator = require("@reduxjs/toolkit").createSlice;
import { createSlice as sliceCreator } from "@reduxjs/toolkit";

const initialIceCream = {
  numOfIceCreams: 20,
};

const iceCreamSlice = sliceCreator({
  name: "iceCream",
  initialState: initialIceCream,
  reducers: {
    iceCreamOrdered: (state) => {
      state.numOfIceCreams--;
    },
    iceCreamRestocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(orderCake, (state) => {
      state.numOfIceCreams--;
    });
  },
});

// module.exports = iceCreamSlice.reducer;
export default iceCreamSlice.reducer;
// module.exports.actions = iceCreamSlice.actions;
export const { iceCreamOrdered, iceCreamRestocked } = iceCreamSlice.actions;
