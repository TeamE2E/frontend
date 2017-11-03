import React from 'react';

export default class ListItem extends React.Component {
  render() {
    console.log(this);
    return (
       <li className="list-group-item">Price: {this.props.itemProp.price_cents}ct Min: {this.props.itemProp.min_kwh}kWh Available: {this.props.itemProp.available_kwh}kWh</li>
    );
  }
}
