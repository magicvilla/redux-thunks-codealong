import { createSlice } from '@reduxjs/toolkit'

export const todos = createSlice({
  name: 'todos',
  initialState: {
    all: []
  },
  reducers: {
    setTodos: (state, action) => {
      state.all = action.payload
    }
  }
})
