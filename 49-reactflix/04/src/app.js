'use strict'

import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import VideosList from 'components/videos-list'
import 'normalize.css'
import 'milligram'

const App = () => (
  <Container>
    <Header>
      <h1>ReactFlix</h1>
    </Header>

    <Main>
      <VideosList />
    </Main>

    <Footer>
      &copy; 2018
    </Footer>
  </Container>
)

injectGlobal`
  html, body, div[data-js="app"] {
    height: 100%;
  }
`
const headerHeight = '60px'
const footerHeight = '30px'

const Header = styled.header`
  height: ${headerHeight};
  background: #333;
`
const Container = styled.div`
  height: 100%;
`
const Main = styled.main`
  height: calc(100% - ${headerHeight} - ${footerHeight});
`
const Footer = styled.footer`
  height: ${footerHeight};
  background: #333;
`

export default App
