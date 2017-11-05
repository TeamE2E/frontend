import React from 'react';

export default class Menu extends React.Component {
  render() {
    return(
      <div className="menu">
        <img src="./client/logo.png"></img>
        <span className="name">TopUp</span>
        <span className="td">TECH DEMO</span>
      </div>
    );
  }
}
