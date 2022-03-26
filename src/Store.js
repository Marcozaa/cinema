import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from "./counterSlice";
import utenteReducer from "./utenteSlice"
import playlistReducer from "./playlistSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
    idUtente: utenteReducer,
    playlistUtente: playlistReducer,
  },
})