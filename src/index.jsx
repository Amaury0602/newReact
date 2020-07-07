import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';


//   handleClick = () => {
//     this.setState({
//       clicked : !this.state.clicked
//     });
//   }

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
