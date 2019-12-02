import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ui } from './reducers/ui'
import { todos } from './reducers/todos'
import { TodoList } from './components/TodoList'
import { LoadingIndicator } from './components/LoadingIndicator'
import { FetchTodosButton } from './components/FetchTodosButton'

const reducer = combineReducers({
  ui: ui.reducer,
  todos: todos.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <LoadingIndicator />
      <TodoList />
      <FetchTodosButton />
    </Provider>
  )
}
