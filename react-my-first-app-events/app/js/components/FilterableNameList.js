import React from 'react';

import NameRow from './NameList/NameRow';

export default class FilterableNameList extends React.Component {
  constructor() {
    super();

    this.state = {
      names: [],
      event: 'no event detected',
      filterText: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.nameFilter = this.nameFilter.bind(this);
  }

  componentWillMount() {
    this.setState({
      names: this.props.names
    })
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      event: event.type
    })
  }

  nameFilter(event) {
    // let newNames = this.state.names.filter((name) => {
    //   let fullName = `${name.first_name} ${name.last_name}`
    //   return fullName.toLowerCase().includes(event.target.value.toLowerCase())
    // })

    this.setState({
      filterText: event.target.value
    })
  }

  render() {
    let {names} = this.state;
    let {filterText} = this.state;

    if (filterText.length >= 1) {
      names = names.filter((name) => {
        let fullName = `${name.first_name} ${name.last_name}`;
        return fullName.toLowerCase().includes(filterText.toLowerCase());
      })
    }

    return (
      <div>
        <h2>Debug</h2>
        {JSON.stringify(this.state, null)}
        <h2>{this.state.event}</h2>
        <input
          onChange={this.nameFilter}
          // onFocus={this.handleClick}
          // onBlur={this.handleClick}
          type="text" />
        {names.map((name) => <NameRow key={name.id} name={name} />)}
      </div>
    )
  }
}
