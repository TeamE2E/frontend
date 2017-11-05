import React from 'react';
import Menu from './Menu.jsx';

export default class Success extends React.Component {
  render() {
    return(
      <div>
        <Menu/>
        <div className="content success">
          <h1>Your driver is on their way!</h1>
          <h2>Check your inbox for booking details!</h2>

          <a href="" className="btn">Go Back</a>
        </div>
      </div>
    );
  }
}
