import React from 'react';

export default class Breakdown extends React.Component {
  render() {
    return(
      <div>
        <h1>Summary</h1>
        <p>Charge cost: {this.props.itemProp.price_cents}</p>
        <p>TopUp fee: {this.props.itemProp.fee}</p>
        <hr/>
        <p>Total: {this.props.itemProp.total_amount}</p>
      </div>
    );
  }
}
