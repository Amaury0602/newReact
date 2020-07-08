import React, { Component } from 'react';


class Marker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="marker">
        <Marker lat={this.props.lat} lng={this.props.lng}/>
      </div>
    );
  }
}

export default Marker;
