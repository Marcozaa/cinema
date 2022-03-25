import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from "./counterSlice";
import utenteReducer from "./utenteSlice"
export default configureStore({
  reducer: {
    counter: counterReducer,
    idUtente: utenteReducer,
  },
})