'use strict'

import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import Play from 'components/play'
import 'normalize.css'
import 'milligram'

const App = () => (
  <Container>
    <Header>
      <h1>ReactFlix</h1>
    </Header>

    <Main>
      <VideosList>
        {Array.from({ length: 10 }).map((item, index) => (
          <Video key={index}>
            <VideoThumb>
              <PlayStyled />
            </VideoThumb>
            <VideoTitle>Titulo do Video</VideoTitle>
          </Video>
        ))}
      </VideosList>
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
const VideosList = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const VideoTitle = styled.h2`
  font-size: 18px;
`
const VideoThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #999;
  height: 150px;
`

const Video = styled.section`
  flex: 1 1 300px;
  margin: 0 5px 5px;
`

const PlayStyled = styled(Play)`
  width: 50px;
  height: 50px;
  fill: #999;
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
