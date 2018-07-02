'use strict'
import React from 'react'
import Form from 'components/form'
import TodoList from 'components/todo-list'
import Filter from 'components/Filter'
import SearchCep from 'components/search-cep'

const App = ({ todo, handleToggleTodo }) => (
  <div>
    <div>
      <Form />
      <TodoList />
      <Filter />
    </div>
    <div>
      <SearchCep />
    </div>
  </div>
)

export default App
