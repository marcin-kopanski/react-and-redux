import React from 'react';

import Timer from './Timer';
import FilterableNameList from './FilterableNameList';

export default class Layout extends React.Component {

  constructor() {
    super();

  }


  render() {
    return (
      <div>
        <h1>Welcome to my site!</h1>
        <h3>Happy to have you here</h3>
        <p>Lorem ipsum lorem ipsum</p>

        <Timer />

      <FilterableNameList names={this.props.names} />

      </div>
    )
  }
}
