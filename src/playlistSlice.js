import { createSlice } from "@reduxjs/toolkit";


export const playlistSlice = createSlice({
  name: 'playlistUtente',
  initialState: {
    value: "",
  },
  reducers: {
    setPlaylistUtente: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setPlaylistUtente } = playlistSlice.actions

export default playlistSlice.reducer