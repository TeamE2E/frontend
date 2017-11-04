import React from 'react';
import Menu from './Menu.jsx';
import Map from './Map.jsx';
import Listing from './Listing.jsx';
import HttpUtil from '../util/HttpUtil.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    HttpUtil.sendAuthenticatedRequest("GET", "offers", this.setItems.bind(this));
  }
  setItems(items) {
    this.setState({
      items: JSON.parse(items)
    });
  }
  render() {
    return (
      <div>
        <Menu/>
        <div className="content">
          <div className="left">
            <Map/>
          </div>
          <div className="right">
            <Listing itemsProp={this.state.items}/>
          </div>
        </div>
      </div>
    );
  }
}
