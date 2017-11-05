import React from 'react';
import HttpUtil from '../util/HttpUtil.jsx';

export default class ListItem extends React.Component {
  redirect(id, e) {
    e.preventDefault();
    window.location.assign('/#/confirm/' + id);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.refs.email.value);

    HttpUtil.sendAuthenticatedRequest("POST", "bookings", function() {

    }, "offer_id=10&email=" + this.refs.email.value);
  }
  render() {
    return (
      <form className="main-form__body" onSubmit={this.handleSubmit.bind(this)}>
        <input name="email" ref="email" className="main-form__body--input" type="email" placeholder="Email Address" />
        <button className="btn">Pay</button>
      </form>
    );
  }
}
