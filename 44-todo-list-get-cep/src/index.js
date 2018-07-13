'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './app'
import rootReducer from 'reducers'

const logger = ({ dispatch, getState }) => (next) => (action) => {
  console.log('LOGGER::will dispacth', action)
  const nextAction = next(action)
  console.log('LOGGER::next action', nextAction)
  return nextAction
}

const thunk = ({ dispacth, getState }) => (next) => (action) => {
  console.log('THUNK::will dispacth', action)
  const nextAction = next(action)
  console.log('THUNK::next action', nextAction)
  return nextAction
}

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

// ----------------------
store.dispatch(lazyAction())
function lazyAction () {
  return () => {
    console.log('lazyAction')
  }
}
// ----------------------
const renderState = () => {
  console.log('state', store.getState())
}

store.subscribe(renderState)
renderState()

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <NextApp />
      </Provider>
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
  module.hot.accept('reducers', () => {
    const nextReducer = require('reducers').default
    store.replaceReducer(nextReducer)
  })
}
