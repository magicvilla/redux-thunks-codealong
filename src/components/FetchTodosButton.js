import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchTodos } from 'reducers/todos'

export const FetchTodosButton = () => {
  const dispatch = useDispatch()

  return (
    <button type="button" onClick={() => dispatch(fetchTodos())}>
      Fetch todos!
    </button>
  )
}
