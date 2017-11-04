import React from 'react';
import Menu from './Menu.jsx';
import ListItem from './ListItem.jsx';
import Breakdown from './Breakdown.jsx';
import CreditCardForm from './CreditCardForm.jsx'
import {
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  PaymentRequestButtonElement,
  StripeProvider,
  Elements,
  injectStripe,
} from 'react-stripe-elements';

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
    super(props)
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
          <StripeProvider apiKey="pk_test_vZ3uWz1vStAwAI0S3LXX4iS8">
            <Elements>
              <CreditCardForm fontSize={10} />
            </Elements>
          </StripeProvider>
          </div>
        </div>
      </div>
    );
  }
}
