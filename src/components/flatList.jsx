import React, { Component } from 'react';

import Flat from './flat';


class FlatList extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (this.props.allFlats.map((flat) => {
      return (<Flat name={flat.name} price={flat.price} imageUrl={flat.imageUrl} />);
    }));
  }
}

export default FlatList;
