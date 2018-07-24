'use strict'
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { openRegisterVideo } from 'reducers/ui/action-creators'
import { headerHeight } from 'utils/constants'

const MainHeader = ({ onOpenRegisterVideo }) => (
  <Header>
    <HeaderTitle>ReactFlix</HeaderTitle>
    <RegisterButtton onClick={onOpenRegisterVideo}>Cadastrar video</RegisterButtton>
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
const mapDispatchToProps = (dispatch) => ({
  onOpenRegisterVideo: () => dispatch(openRegisterVideo())
})

export default connect(null, mapDispatchToProps)(MainHeader)
