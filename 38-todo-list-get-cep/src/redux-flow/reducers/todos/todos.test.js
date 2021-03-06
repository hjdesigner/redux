'use strict'

import { expect } from 'chai'
import deepfreeze from 'deep-freeze'
import todos from './index'
import { ADD_TODO, TOGGLE_TODO } from './actions'

it('should add todo item', () => {
  const before = deepfreeze([])
  const action = deepfreeze({
    type: ADD_TODO,
    payload: {id: 0, text: 'Hey'}
  })
  const after = [{id: 0, text: 'Hey', completed: false}]
  expect(todos(before, action)).to.be.deep.equal(after)
})
it('should add  a new todo item', () => {
  const before = deepfreeze([{id: 0, text: 'Hey', completed: false}])
  const action = deepfreeze({
    type: ADD_TODO,
    payload: {id: 1, text: 'Ho'}
  })
  const after = [
    {id: 0, text: 'Hey', completed: false},
    {id: 1, text: 'Ho', completed: false}
  ]
  expect(todos(before, action)).to.be.deep.equal(after)
})
it('should toggle first todo', () => {
  const before = deepfreeze([
    {id: 0, text: 'Hey', completed: false},
    {id: 1, text: 'Ho', completed: false}
  ])
  const action = deepfreeze({
    type: TOGGLE_TODO,
    payload: { id: 0 }
  })
  const after = [
    {id: 0, text: 'Hey', completed: true},
    {id: 1, text: 'Ho', completed: false}
  ]
  expect(todos(before, action)).to.be.deep.equal(after)
})
it('should toggle second todo', () => {
  const before = deepfreeze([
    {id: 0, text: 'Hey', completed: true},
    {id: 1, text: 'Ho', completed: false}
  ])
  const action = deepfreeze({
    type: TOGGLE_TODO,
    payload: { id: 1 }
  })
  const after = [
    {id: 0, text: 'Hey', completed: true},
    {id: 1, text: 'Ho', completed: true}
  ]
  expect(todos(before, action)).to.be.deep.equal(after)
})
