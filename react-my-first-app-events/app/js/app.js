import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import Layout from './components/Layout';

import names from './mock-data';

class App extends React.Component {

  render() {
    return (
      <div>
        <Layout names={names} />
      </div>
    )
  }
}

export default hot(module)(App)

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
