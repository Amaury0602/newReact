import React, { Component } from 'react';


class Flat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1 className={"card-user"}> {this.props.price} </h1>
    );
  }
}

export default Flat;
