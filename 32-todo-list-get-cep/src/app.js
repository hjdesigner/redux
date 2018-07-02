'use strict'
import React from 'react'
import Form from 'components/form'
import TodoList from 'components/todo-list'
import Filter from 'components/Filter'
import SearchCep from 'components/search-cep'
import 'milligram'

const App = ({ todo, handleToggleTodo }) => (
  <div style={{ display: 'flex', justifyContent: 'space-around', padding: 30 }}>
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
