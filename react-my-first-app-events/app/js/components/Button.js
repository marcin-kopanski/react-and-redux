import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <button onClick={this.props.changeName}>{this.props.firstName}</button>
    )
  }
}

Button.propTypes = {
  firstName: PropTypes.string,
  changeName: PropTypes.func
}
