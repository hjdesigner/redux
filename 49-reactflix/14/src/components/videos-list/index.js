'use strict'

import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Play from '../play'

const VideosList = ({ videos }) => (
  <Container>
    {Object.keys(videos).map((id) => (
      <Video key={id}>
        <VideoThumb>
          <PlayStyled />
        </VideoThumb>
        <VideoTitle>{videos[id].title}</VideoTitle>
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
const mapStateProps = (state) => ({
  videos: state.videos
})

export default connect(mapStateProps)(VideosList)
