'use strict'
import React from 'react'
import styled from 'styled-components'

const RegisterVideos = () => (
  <Form>
    <h2>Cadastrar video</h2>
    <label htmlFor='id'>ID do video</label>
    <input type='text' id='id' name='id' />
    <label htmlFor='title'>Titulo do video</label>
    <input type='text' id='title' name='title' />
    <button type='submit'>Cadastrar</button>
  </Form>
)

const Form = styled.form`
  padding: 10px;
`

export default RegisterVideos
