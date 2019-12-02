import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

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

export const fetchTodos = () => (
  async (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((json) => {
        dispatch(todos.actions.setTodos(json))
        dispatch(ui.actions.setLoading(false))
      })
  }
)
