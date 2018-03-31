import React from 'react';
import PropTypes from 'prop-types';

import { TimerHeader } from './Timer/TimerHeader';
import TimerButton from './Timer/TimerButton';

export default class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      time: 0,
      isStarted: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.startTimer()
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time += 1,
        isStarted: true
      }))}, 1000)
  }

  endTimer() {
    clearInterval(this.timer)
    this.setState({
      isStarted: false
    })
  }

  handleClick() {
    this.state.isStarted ? this.endTimer() : this.startTimer()
  }

  render() {
    return (
      <div>
        <TimerHeader time={this.state.time} />
        <TimerButton handleClick={this.handleClick} isStarted={this.state.isStarted}/>
      </div>
    )
  }
}
