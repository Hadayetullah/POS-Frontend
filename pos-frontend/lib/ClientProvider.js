"use client";

import { Provider } from "react-redux";
import store from "./store";

export default function ClientProvider({ children }) {
  // console.log(children);
  return <Provider store={store}>{children}</Provider>;
}
