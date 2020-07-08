import React, { Component } from 'react';


class Flat extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.selectFlat(this.props.index);
  }

  render() {
    return (
      <div onClick={this.handleClick} className={`card ${this.props.index === this.props.selectedFlatIndex ? "active" : null}`} style={{ backgroundImage: `url(${this.props.imageUrl})`}} index={this.props.index} onClick={this.handleClick}>
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
