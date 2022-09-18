import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./slices/eventSlice";

export interface TypeReducer {
  event: typeof eventReducer;
}

const reducer: TypeReducer = {
  event: eventReducer,
};

const store = configureStore({
  reducer,
});

export default store;
