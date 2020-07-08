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
      <div>
        <FlatList allFlats={flats} />
        <div className="map-container">
          <GoogleMap />
        </div>
      </div>
    );
  }
}

export default App;
