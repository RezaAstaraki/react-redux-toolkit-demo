// const configureStore = require("@reduxjs/toolkit").configureStore;
import { configureStore } from "@reduxjs/toolkit";

// const reduxLogger = require("redux-logger");

// const logger = reduxLogger.createLogger();
// const cakeReducer = require("../features/cake/cakeSlice");
import cakeReducer from "../features/cake/cakeSlice";
// const iceCreamReducer = require("../features/icecream/icecreamSlice");
import iceCreamReducer from "../features/icecream/icecreamSlice";
// const userReducer = require("../features/user/userSlice");
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
});

// module.exports = store;
export default store;
