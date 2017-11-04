import React from 'react';

export default class ListItem extends React.Component {
  render() {
    console.log(this);
    return (
       <li className="list-group-item d-flex justify-content-between align-items-center">
          <div style={{float: 'left'}}>
            <h1>{this.props.itemProp.available_kwh}kWh</h1>
          </div>
          <div>
            Min: {this.props.itemProp.min_kwh}kWh
          </div>
          <div>
            <h1>{this.props.itemProp.price_cents}ct</h1>
          </div>
       </li>
    );
  }
}
