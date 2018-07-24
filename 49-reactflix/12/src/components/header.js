'use strict'
import React from 'react'
import styled from 'styled-components'
import { headerHeight } from 'utils/constants'

const MainHeader = () => (
  <Header>
    <HeaderTitle>ReactFlix</HeaderTitle>
    <RegisterButtton>Cadastrar video</RegisterButtton>
  </Header>
)

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

export default MainHeader
