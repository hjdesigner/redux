'use strict'
import React from 'react'
import Form from 'components/form'
import TodoList from 'components/todo-list'
import Filter from 'components/Filter'

const App = ({ todo, handleToggleTodo }) => (
  <div>
    <Form />
    <TodoList />
    <Filter />
  </div>
)

export default App
