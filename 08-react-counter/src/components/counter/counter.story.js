'use strict'

import { storiesOf, action } from '@storybook/react'
import React from 'react'
import { Counter } from './index'

const stories = storiesOf('Counter', module)

stories.add('Counter', () => (
  <Counter counter={1} increment={action('increment')} decrement={action('decrement')} />
))
