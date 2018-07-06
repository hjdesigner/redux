'use strict'

import React, { PureComponent } from 'react'
import ajax from '@fdaciuk/ajax'
import SearchCep from './search-cep'

class SearchCepContainer extends PureComponent {
  state = {
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1,
    isFetching: false
  }
  hendleSubmit = async (e) => {
    e.preventDefault()
    this.setState({ isFetching: true })
    const cep = e.target.cep.value
    const response = await ajax().get('http://apps.widenet.com.br/busca-cep/api/cep.json', { code: cep })
    this.setState({ isFetching: false })
    this.setState(response)
  }

  render () {
    return (
      <SearchCep
        {...this.state}
        hendleSubmit={this.hendleSubmit}
      />
    )
  }
}

export default SearchCepContainer
