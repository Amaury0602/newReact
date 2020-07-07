import React, { Component } from 'react';


class Flat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card" style={{ backgroundImage: `url(${this.props.imageUrl})`}}>
        <div className="card-category"> {this.props.price} € </div>
        <div className="card-description">
          <h2> {this.props.name} </h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
