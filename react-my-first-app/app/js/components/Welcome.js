import React from 'react';
import PropTypes from 'prop-types';

export default class Welcome extends React.Component {

  render() {
    return (
      <div>
        <h2>The original component passed this message along: {this.props.originalPhrase}</h2>
        <h4>Welcome to my site, {this.props.firstName}!</h4>
        <h4>{this.props.lastName}</h4>
        {this.props.element}
      </div>
    )
  }
}

const lengthChecker = ((props, propName, component) => {
  if (props[propName]) {
    let val = props[propName];
    if (typeof val === 'string') {
      return val.length <= 5 ? null : new Error(`${propName} in ${component} is too short!`)
    }
  }
  return null;
})

Welcome.propTypes = {
  firstName: lengthChecker,
  lastName: PropTypes.string,
  originalPhrase: PropTypes.string,
  element: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ])
}

Welcome.defaultProps = {
  originalPhrase: "I don't have any props!!!! :("
}
