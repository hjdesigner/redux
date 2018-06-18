'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from 'reducers/todos/actions-creators.js'

const App = ({ todo, handleAddTodo }) => (
  <div>
    <form onSubmit={handleAddTodo}>
      <input type='text' name='todo' />
      <button type='submit'>Adicionar</button>
    </form>
    <ul>
      {todo.map((todo) => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </li>
      ))}
    </ul>
    <div>
      <h3>Mostrar</h3>
      <span>Todos</span> | <a href=''>Finalizados</a> | <a href=''>A fazer</a>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  todo: state
})

const mapDispatchToProps = (dispatch) => ({
  handleAddTodo: (e) => {
    e.preventDefault()
    dispatch(addTodo(e.target.todo.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
