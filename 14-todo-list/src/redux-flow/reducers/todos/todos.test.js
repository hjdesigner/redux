'use strict'

import { expect } from 'chai'
import todos from './index'
import { ADD_TODO } from './actions'

it('should todos be a function', () => {
  expect(todos).to.be.a('function')
})
