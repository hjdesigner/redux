'use strict'

import React from 'react'
import { connect } from 'react-redux'
import styled, { injectGlobal } from 'styled-components'
import MainHeader from 'components/header'
import MainFooter from 'components/footer'
import VideosList from 'components/videos-list'
import VideoSingle from 'components/video-single'
import RegisterVideo from 'components/register-videos'
import 'normalize.css'
import 'milligram'

const App = ({ isRegisterVideoFormOpened }) => (
  <Container>
    <MainHeader />
    <Main>
      {isRegisterVideoFormOpened && <RegisterVideo />}
      <VideoSingle />
      <VideosList />
    </Main>
    <MainFooter />
  </Container>
)

injectGlobal`
  html, body, div[data-js="app"] {
    height: 100%;
  }
`
const Container = styled.div`
  height: 100%;
`
const Main = styled.main`
  height: auto;
`
const mapStateProps = (state) => ({
  isRegisterVideoFormOpened: state.ui.isRegisterVideoFormOpened
})

export default connect(mapStateProps)(App)
