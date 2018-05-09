'use strict'
import React, { PureComponent } from 'react'
import Counter from './counter.js'

class CounterContainer extends PureComponent {
  constructor (props) {
    super(props)
    this.increment = () => {
      this.props.store.dispatch({ type: 'INCREMENT' })
    }
    this.decrement = () => {
      this.props.store.dispatch({ type: 'DECREMENT' })
    }
  }
  componentDidMount () {
    this.props.store.subscribe(() => this.forceUpdate())
  }
  render () {
    return (
      <Counter counter={this.props.store.getState()} increment={this.increment} decrement={this.decrement} />
    )
  }
}

export default CounterContainer
