'use strict'

import React from 'react'
import { connect } from 'react-redux'
import SearchCep from './search-cep'
import { fetchAdress } from 'reducers/address/actions-creators'

const SearchCepContainer = ({ address, hendleSubmit }) => (
  <SearchCep
    {...address}
    hendleSubmit={hendleSubmit}
  />
 )

const mapStateToProps = (state) => ({
  address: state.address
})

const mapDispatchToProps = (dispatch) => ({
  hendleSubmit: (e) => {
    e.preventDefault()
    dispatch(fetchAdress(e.target.cep.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchCepContainer)
