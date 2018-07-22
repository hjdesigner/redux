'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { fetchAdress } from 'reducers/address/actions-creators'

export const SearchCep = ({
  address,
  city,
  code,
  district,
  state,
  status,
  isFetching,
  hendleSubmit
}) => (
  <div>
    <form onSubmit={hendleSubmit}>
      <input type='text' name='cep' />
      <button type='submit' disabled={isFetching}>
        {isFetching ? 'Buscando...' : 'Buscar endereço'}
      </button>
    </form>
    {status === 0 && <div>Cep não encontrado</div>}
    {status === 1 && (
      <table>
        <thead>
          <tr>
            <td>CEP</td>
            <td>Endereço</td>
            <td>Bairro</td>
            <td>Cidade</td>
            <td>Estado</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{code}</td>
            <td>{address}</td>
            <td>{district}</td>
            <td>{state}</td>
            <td>{state}</td>
          </tr>
        </tbody>
      </table>
    )}
  </div>
)

const mapStateToProps = (state) => state.address

const mapDispatchToProps = (dispatch) => ({
  hendleSubmit: (e) => {
    e.preventDefault()
    dispatch(fetchAdress(e.target.cep.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchCep)
