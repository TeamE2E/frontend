import React from 'react';

export default class ListItem extends React.Component {
  redirect(id, e) {
    e.preventDefault();
    window.location.assign('/#/confirm/' + id);
  }
  render() {
    return (
       <li className="list-group-item d-flex justify-content-between align-items-center" onClick={(e) => this.redirect(this.props.itemProp.id, e)}>
          <div style={{float: 'left'}}>
            <h1>{this.props.itemProp.available_kwh}kWh</h1>
          </div>
          <div>
            Min: {this.props.itemProp.min_kwh}kWh
          </div>
          <div>
            <h1>{this.props.itemProp.price_cents}&euro;</h1>
          </div>
       </li>
    );
  }
}
