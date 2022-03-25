import { createSlice } from "@reduxjs/toolkit";


export const utenteSlice = createSlice({
  name: 'idUtente',
  initialState: {
    value: "",
  },
  reducers: {
    setIdUtente: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setIdUtente } = utenteSlice.actions

export default utenteSlice.reducer