'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from 'reducers/todos/actions-creators.js'

const TodoList = ({ todo, handleToggleTodo }) => (
  <ul>
    {todo.map((todo) => (
      <li
        key={todo.id}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={handleToggleTodo(todo.id)}
      >
        {todo.text}
      </li>
    ))}
  </ul>
)

const mapStateToProps = (state) => ({
  todo: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  handleToggleTodo: (id) => (e) => {
    dispatch(toggleTodo(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
