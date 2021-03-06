'use strict'

import React from 'react'
import styled from 'styled-components'
import Play from '../play'

const VideosList = () => (
  <Container>
    {Array.from({ length: 10 }).map((item, index) => (
      <Video key={index}>
        <VideoThumb>
          <PlayStyled />
        </VideoThumb>
        <VideoTitle>Titulo do Video</VideoTitle>
      </Video>
    ))}
  </Container>
)

const PlayStyled = styled(Play)`
  width: 50px;
  height: 50px;
  fill: #999;
  transition: all .25s ease-in-out;
`
const Video = styled.section`
  &:hover ${PlayStyled} {
    transform: scale(1.5)
  }
`
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  & ${Video} {
    flex: 1 1 300px;
    margin: 0 5px 5px;
  }
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
export default VideosList
