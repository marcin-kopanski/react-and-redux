import React from 'react';
import ReactDOM from 'react-dom';
// import createReactClass from 'create-react-class';

import NameList from './components/NameList';

class App extends React.Component {

  render() {
    return (
      <div>
        <NameList number="1" />
        <NameList number="2" />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
