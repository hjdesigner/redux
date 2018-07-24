'use strict'
import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { footerHeight } from 'utils/constants'

const MainFooter = () => (
  <Footer>
    &copy; 2018
  </Footer>
)

const Footer = styled.footer`
  height: ${footerHeight};
  background: #333;
`

export default MainFooter
