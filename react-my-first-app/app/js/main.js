import React from 'react';
import ReactDOM from 'react-dom';
// import createReactClass from 'create-react-class';

const Welcome = ((props) => {
  return (
    <div>
      <h4>Welcome to my site, {props.firstName}!</h4>
      <h4>{props.lastName}</h4>
    </div>
  )
});

class App extends React.Component {

  nameMapper(nameArray) {
    return nameArray.map((name, i) =>
      <li key={i}>{name}</li>
    );
  }

  render() {
    const nameArray = ['Chris', 'Jane', 'BillyBob', 'JoeyJoeJoe', 'Mary'];

    return (
      <div>
        <Welcome firstName="Marcin" lastName="Kopanski"/>
        <ul>
          {this.nameMapper(nameArray)}
        </ul>
        <Welcome firstName="Jane" lastName="Doe" />
      </div>
    )
  }
}

// const App = createReactClass({
//
//   nameMapper: function() {
//     const nameArray = ['Chris', 'Jane', 'BillyBob', 'JoeyJoeJoe', 'Mary'];
//
//     return nameArray.map((name, i) =>
//       <li key={i}>{name}</li>
//     );
//   },
//
//   render: function() {
//     return (
//       <div>
//         <Welcome firstName="Marcin" lastName="Kopanski"/>
//         <ul>
//           {this.nameMapper}
//         </ul>
//         <Welcome firstName="Jane" lastName="Doe" />
//       </div>
//     )
//   }
// });

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
