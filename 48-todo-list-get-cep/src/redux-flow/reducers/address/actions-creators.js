'use strict'
import ajax from '@fdaciuk/ajax'
import { FETCHING, SUCCESS } from './actions'

export const fetchAdress = (cep) => async (dispatch, getstate) => {
  dispatch({ type: FETCHING })
  const response = await ajax().get('http://apps.widenet.com.br/busca-cep/api/cep.json', { code: cep })
  dispatch({
    type: SUCCESS,
    payload: response
  })
}
