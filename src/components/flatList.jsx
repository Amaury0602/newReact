import React, { Component } from 'react';

import Flat from './flat';
import flats from '../data/flats';


class FlatList extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (

    <div className="flat-list">
      {flats.map((flat) => {
        return (<Flat name={flat.name} price={flat.price} imageUrl={flat.imageUrl} />);
      })}
    </div>

    );
  }
}

export default FlatList;
