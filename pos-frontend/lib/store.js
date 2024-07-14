import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "./features/counterSlice";

// const store = configureStore({
//   reducer: {
//     counter: counterSlice,
//   },
// });

// export default store;
