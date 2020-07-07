import React, { Component } from 'react';

import Flat from './flat';

import '../../assets/stylesheets/application.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Flat price={10} />
    );
  }
}

export default App;
