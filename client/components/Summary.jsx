import React from 'react';
import Menu from './Menu.jsx';
import ListItem from './ListItem.jsx';
import EmailForm from './EmailForm.jsx';
import Breakdown from './Breakdown.jsx';
import HttpUtil from '../util/HttpUtil.jsx';

export default class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
    };
  }
  componentDidMount() {
    var t = this;
    HttpUtil.getCredentials(function (err) {
      if (err) {
        console.log('please refresh');
      } else {
        HttpUtil.sendAuthenticatedRequest("GET", "offers/" + t.props.id, t.setItem.bind(t));
      }
    });
  }
  setItem(responseText) {
    this.setState({
      item: JSON.parse(responseText)
    });
  }
  render() {
    return (
      <div>
        <Menu/>
        <div className="content">
          <div className="left">
            <h1 style={{marginBottom: "90px"}}>Booking Confirmation</h1>
            <ListItem itemProp={this.state.item} className="confirmation-list-item"/>
            <Breakdown itemProp={this.state.item} />
          </div>
          <div className="right">
            <EmailForm/>
          </div>
        </div>
      </div>
    );
  }
}
