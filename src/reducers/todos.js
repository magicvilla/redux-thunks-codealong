import { createSlice } from '@reduxjs/toolkit'

// 1) dispatch ui action before GET request. Import ui reducer
//Allows us to access uis actions
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


//Define a function that returns another function.
//The inner function redux will pass it the dispathc
//Will allow us to dispatch more actions to our state.
//Passes also another function called getState which we can use to get the current state of our store
//if we need to.
export const fetchTodos = () => {
  return (dispatch) => {
    //tell ui its loading
    dispatch(ui.actions.setLoading(true))
    //fetch endpoint
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((resp) => resp.json())
      .then((json) => {
        //disptach setTodos action with json as payload
        dispatch(todos.actions.setTodos(json))
        //set loading as false
        dispatch(ui.actions.setLoading(false))
      })
  }
}
