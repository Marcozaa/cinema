import { createSlice } from "@reduxjs/toolkit";


export const utenteSalaSlice = createSlice({
  name: 'utenteSalaData',
  initialState: {
    value: "",
  },
  reducers: {
    setUtenteSalaData: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setUtenteSalaData } = utenteSalaSlice.actions

export default utenteSalaSlice.reducer