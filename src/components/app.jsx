import React, { Component } from 'react';
import '../../assets/stylesheets/application.scss';

import FlatList from './flatList';
import GoogleMap from './map';


import flats from '../data/flats';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      lng : null
    };
  }

  changeMarker = (index) => {
    this.setState({
      lat: flats[index].lat,
      lng: flats[index].lng
    });
    console.log(this.state.lat);
    console.log(this.state.lng);
  }

  render() {
    return (
      <div>
        <FlatList allFlats={flats} changeMarker={this.changeMarker} />
        <div className="map-container">
          <GoogleMap lng={this.state.lng} lat={this.state.lat} />
        </div>
      </div>
    );
  }
}

export default App;
