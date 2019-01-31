import React, { Component } from 'react';
import './styles/style.scss';

import Routes from './components/routes'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
