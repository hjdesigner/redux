'use strict'
import React from 'react'
import styled from 'styled-components'

const VideoSingle = () => (
  <Container>
    <Iframe width='560' height='480' src='https://www.youtube.com/embed/PXlcFWEmTS0?rel=0' frameBorder='0' />
    <Title>Titulo do video</Title>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const Iframe = styled.iframe`
  border: 0;
  width:100%;
  background: #000;
  margin-bottom: 10px;
`
const Title = styled.h2`
  padding: 10px;
`

export default VideoSingle
