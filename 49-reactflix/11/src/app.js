'use strict'

import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import VideosList from 'components/videos-list'
import VideoSingle from 'components/video-single'
import RegisterVideo from 'components/register-videos'
import 'normalize.css'
import 'milligram'

const App = () => (
  <Container>
    <Header>
      <HeaderTitle>ReactFlix</HeaderTitle>
      <RegisterButtton>Cadastrar video</RegisterButtton>
    </Header>

    <Main>
      <RegisterVideo />
      <VideoSingle />
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${headerHeight};
  background: #333;
  padding: 10px;
`
const HeaderTitle = styled.h1`
  margin-bottom: 0;
  color: #FFF;
`
const RegisterButtton = styled.button`
  margin-bottom: 0;
`

const Container = styled.div`
  height: 100%;
`
const Main = styled.main`
  height: auto;
`
const Footer = styled.footer`
  height: ${footerHeight};
  background: #333;
`

export default App
