'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createStore } from 'redux'
import App from './app'

const counter = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1
    case 'DECREMENT': return state - 1
  }
  if (typeof state === 'undefined') {
    return 0
  }
  return state
}

const store = createStore(counter)

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <NextApp store={store} />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}
