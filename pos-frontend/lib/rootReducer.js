// src/app/rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";

const rootReducer = combineReducers({
  counterSlice: counterSlice,
});

export default rootReducer;
