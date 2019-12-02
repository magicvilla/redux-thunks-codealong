import React from 'react'
import { useSelector } from 'react-redux'

export const TodoList = () => {
  const todos = useSelector((state) => state.todos.all)

  return (
    <div>
      <h1>Todos:</h1>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
