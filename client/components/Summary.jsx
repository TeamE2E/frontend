import React from 'react';
import Menu from './Menu.jsx';
import ListItem from './ListItem.jsx';
import Breakdown from './Breakdown.jsx';

const offer = {
  "available_kwh": 29,
  "distance": 1.262164811073668,
  "duration": "12 mins",
  "fee": 2,
  "id": 2,
  "min_kwh": 1,
  "price_cents": 29,
  "price_currency": "eur",
  "total_amount": 31
};

export default class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Menu/>
        <div className="content">
          <div className="left">
            <h1 style={{"margin-bottom": "90px"}}>Booking Confirmation</h1>
            <ListItem itemProp={offer} className="confirmation-list-item"/>
            <Breakdown itemProp={offer} />
          </div>
          <div className="right">
            <h1>Checkout Stuff goes here!</h1>
          </div>
        </div>
      </div>
    );
  }
}
