'use strict'

import React, { PureComponent } from 'react'
import ajax from '@fdaciuk/ajax'
import SearchCep from './search-cep'

class SearchCepContainer extends PureComponent {
  async componentDidMount () {
    const response = await ajax().get('http://apps.widenet.com.br/busca-cep/api/cep.json', { code: '06233-030' })
    console.log(response)
  }

  render () {
    return (
      <SearchCep />
    )
  }
}

export default SearchCepContainer
