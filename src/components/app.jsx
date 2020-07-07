import React, { Component } from 'react';
import '../../assets/stylesheets/application.scss';

import FlatList from './flatList';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlatList />
    );
  }
}

export default App;
