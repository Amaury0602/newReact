import React, { Component } from 'react';

import Flat from './flat';


class FlatList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlatIndex: null
    };
  }

  selectFlat = (index) => {
    this.props.changeMarker(index);
    this.setState({
      selectedFlatIndex: index
    });
  }

  render() {
    return (
      <div className="flat-list">
        {this.props.allFlats.map((flat, index) => {
          return (
            <Flat
              name={flat.name}
              price={flat.price}
              imageUrl={flat.imageUrl}
              key={flat.imageUrl}
              index={index}
              selectedFlatIndex={this.state.selectedFlatIndex}
              selectFlat={this.selectFlat}
            />
          );
        })}
      </div>
    );
  }
}

export default FlatList;
