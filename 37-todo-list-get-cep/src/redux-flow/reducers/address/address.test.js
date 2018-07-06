'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import { UPDATE_ADDRESS } from './actions'
import Address from './index'

it('address should be a function', () => {
  expect(Address).to.be.a('function')
})
it('should action UPDATE_ADDRESS update address', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1
  })
  const action = deepFreeze({
    type: UPDATE_ADDRESS,
    payload: {
      address: 'Rua Atalaia Velha',
      city: 'SP',
      code: '03191140',
      district: 'Vila Canero',
      state: 'SP',
      status: 1
    }
  })
  const after = {
    address: 'Rua Atalaia Velha',
    city: 'SP',
    code: '03191140',
    district: 'Vila Canero',
    state: 'SP',
    status: 1
  }
  expect(Address(before, action)).to.be.deep.equal(after)
})
