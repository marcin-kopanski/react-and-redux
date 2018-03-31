import React from 'react';

import Welcome from './Welcome';

export default class NameList extends React.Component {

  nameMapper(nameArray) {
    return nameArray.map((name, i) =>
      <li key={i}>{name}</li>
    );
  }

  render() {
    const nameArray = ['Chris', 'Jane', 'BillyBob', 'JoeyJoeJoe', 'Mary'];
    const element = <p>I'm an element</p>

    return (
      <div>
        <h3>I am number {this.props.number}</h3>
        <Welcome firstName="Marcin" lastName="Kopanski" element={element}/>
        <ul>
          {this.nameMapper(nameArray)}
        </ul>
        <Welcome firstName="Jane" lastName="Doe" element={4} />
      </div>
    )
  }
}
