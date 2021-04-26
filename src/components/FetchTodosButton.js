import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchTodos } from 'reducers/todos'


//Dispatch our THUNK
export const FetchTodosButton = () => {
  //To use dispatch
  const dispatch = useDispatch()

  return (
    //invoke the fetchTodos () because it returns another function inside the function
    <button type="button" onClick={() => dispatch(fetchTodos())}>
      Fetch todos!
    </button>
  )
}
