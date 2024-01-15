// const sliceCreator = require("@reduxjs/toolkit").createSlice;
import {
  createSlice as sliceCreator,
  createAsyncThunk,
} from "@reduxjs/toolkit";

// const { createAsyncThunk } = require("@reduxjs/toolkit");
// const { axios } = require("axios");
// const axios = require("axios");
import axios from "axios";

const initialState = {
  isLoading: false,
  user: [],
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data.map((user) => user));
});

const userSlice = sliceCreator({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.user = [];
      state.error = action.error.message;
    });
  },
});

// module.exports = userSlice.reducer;
export default userSlice.reducer;
// module.exports.fetchUsers = fetchUsers;
