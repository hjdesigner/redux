'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import { FETCHING, SUCCESS } from './actions'
import Address from './index'

it('should action SUCCESS update address', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1,
    isFatching: true,
  })
  const action = deepFreeze({
    type: SUCCESS,
    payload: {
      address: 'Rua Atalaia Velha',
      city: 'SP',
      code: '03191-140',
      district: 'Vila Canero',
      state: 'SP',
      status: 1
    }
  })
  const after = {
    address: 'Rua Atalaia Velha',
    city: 'SP',
    code: '03191-140',
    district: 'Vila Canero',
    state: 'SP',
    status: 1,
    isFatching: false
  }
  expect(Address(before, action)).to.be.deep.equal(after)
})
