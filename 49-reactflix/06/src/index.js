'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import App from './app'
import configureStore from './redux-flow/configure-store'
import { db } from './config/firebase'

const store = configureStore()

const videos = db.ref('videos')

// videos.on('value', (snapshot) => {
//   console.log('snapshot', snapshot.val())
// }, (error) => {
//   console.log('error:', error)
// })

videos.once('value').then((snapshot) => {
  console.log('snapshot', snapshot.val())
})

/* REMOVE VIDEO

videos.update({
  id: null,
  title: null
})

videos.child('-LIBpu-v30fQNS72egfM').update({
  id: null
}) */

/*
 UPADATE VIDEO
const anyVideo = videos.child('-LIBpu-v30fQNS72egfM')
anyVideo.set({
  id: 'PXlcFWEmTS0',
  title: 'Portugal 2'
})
anyVideo.update({
  title: 'Portugal 2 update'
}) */

/*
ADD NEW VIDEO
const newVideo = videos.push()

newVideo.set({
  id: 'PXlcFWEmTS0',
  title: 'Portugal'
}) */

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
}
