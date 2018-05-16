'use strict'
import Counters, {
  ADD_COUNTER,
  REMOVE_COUNTER,
  INCREMENT,
  DECREMENT,
  initialState
} from './index'
import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

it('Counters should be a function', () => {
  expect(Counters).to.be.a('function')
})

it('Should add a new counter', () => {
  const before = deepFreeze(initialState)
  const action = deepFreeze({ type: ADD_COUNTER })
  const after = [0]
  expect(Counters(before, action)).to.be.deep.equal(after)
})

it('Should add a  new counter again', () => {
  const before = deepFreeze([0, 1])
  const action = deepFreeze({ type: ADD_COUNTER })
  const after = [0, 1, 0]
  expect(Counters(before, action)).to.be.deep.equal(after)
})

it('Should remove a counter', () => {
  const before = deepFreeze([0, 1, 2])
  const action = deepFreeze({ type: REMOVE_COUNTER, index: 1 })
  const after = [0, 2]
  expect(Counters(before, action)).to.be.deep.equal(after)
})

it('Should remove a counter again', () => {
  const before = deepFreeze([3, 1])
  const action = deepFreeze({ type: REMOVE_COUNTER, index: 0 })
  const after = [1]
  expect(Counters(before, action)).to.be.deep.equal(after)
})
it('Should increment a counter', () => {
  const before = deepFreeze([0, 0])
  const action = deepFreeze({ type: INCREMENT, index: 0 })
  const after = [1, 0]
  expect(Counters(before, action)).to.be.deep.equal(after)
})
it('Should increment a counter again', () => {
  const before = deepFreeze([1, 0])
  const action = deepFreeze({ type: INCREMENT, index: 1 })
  const after = [1, 1]
  expect(Counters(before, action)).to.be.deep.equal(after)
})
it('Should decrement a counter', () => {
  const before = deepFreeze([0, 2, 1])
  const action = deepFreeze({ type: DECREMENT, index: 2 })
  const after = [0, 2, 0]
  expect(Counters(before, action)).to.be.deep.equal(after)
})
it('Should decrement a counter again', () => {
  const before = deepFreeze([0, 2, 0])
  const action = deepFreeze({ type: DECREMENT, index: 1 })
  const after = [0, 1, 0]
  expect(Counters(before, action)).to.be.deep.equal(after)
})
it('Should return same state if action is unknown', () => {
  const before = deepFreeze([0, 0, 1])
  const action = deepFreeze({ type: 'UNKNOWN' })
  const after = [0, 0, 1]
  expect(Counters(before, action)).to.be.deep.equal(after)
})
it('Should return intial state if last state is undefined', () => {
  const before = undefined
  const action = deepFreeze({})
  const after = initialState
  expect(Counters(before, action)).to.be.deep.equal(after)
})
