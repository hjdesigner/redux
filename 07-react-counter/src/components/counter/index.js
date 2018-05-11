'use strict'
import React, { PureComponent } from 'react'
import Counter from './counter.js'
import { connect } from 'react-redux'

class CounterContainer extends PureComponent {
  constructor (props) {
    super(props)
    this.increment = () => {
      this.props.dispatch({ type: 'INCREMENT' })
    }
    this.decrement = () => {
      this.props.dispatch({ type: 'DECREMENT' })
    }
  }

  render () {
    return (
      <Counter counter={this.props.counter} increment={this.increment} decrement={this.decrement} />
    )
  }
}
const mapStateProps = (state) => {
  return {
    counter: state
  }
}

export default connect(mapStateProps)(CounterContainer)
