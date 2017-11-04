import React from 'react';

export default class Breakdown extends React.Component {
  render() {
    return(
      <div className="confirmation-breakdown">
        <h3>Summary</h3>

        <div style={{float: 'left'}}>Charge cost: </div>
        <div style={{float: 'right'}}>{this.props.itemProp.price_cents} &euro;</div>

        <br/>

        <div style={{float: 'left'}}>TopUp fee: </div>
        <div style={{float: 'right'}}>{this.props.itemProp.fee} &euro;</div>

        <br/>
        <hr/>

        <div style={{float: 'left'}}>Total: </div>
        <div style={{float: 'right'}}>{this.props.itemProp.total_amount} &euro;</div>
      </div>
    );
  }
}
