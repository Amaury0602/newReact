import React, { Component } from 'react';
import '../../assets/stylesheets/application.scss';

import FlatList from './flatList';
import GoogleMap from './map';


import flats from '../data/flats';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flat-list">
        <FlatList allFlats={flats} />
      </div>
    );
  }
}

export default App;
