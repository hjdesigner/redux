import { expect } from 'chai'
import deepfreeze from 'deep-freeze'
import videos from './index'
import { ADD_VIDEO } from './actions'

it('should add video item', () => {
  const before = deepfreeze({})
  const action = deepfreeze({
    type: ADD_VIDEO,
    payload: {
      id: 'PXlcFWEmTS0',
      title: 'Portugal'
    }
  })
  const after = {
    PXlcFWEmTS0: {
      id: 'PXlcFWEmTS0',
      title: 'Portugal'
    }
  }
  expect(videos(before, action)).to.be.deep.equal(after)
})

it('should add  a new video item', () => {
  const before = deepfreeze({
    PXlcFWEmTS0: {
      id: 'PXlcFWEmTS0',
      title: 'Portugal'
    }
  })
  const action = deepfreeze({
    type: ADD_VIDEO,
    payload: {
      id: 'PXlcFWEmTS0',
      title: 'Portugal2'
    }
  })
  const after = {
    PXlcFWEmTS0: {
      id: 'PXlcFWEmTS0',
      title: 'Portugal'
    },
    PXlcFWEmTS0: {
      id: 'PXlcFWEmTS0',
      title: 'Portugal2'
    }
  }
  expect(videos(before, action)).to.be.deep.equal(after)
})
