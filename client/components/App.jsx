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
    var t = this;
    HttpUtil.getCredentials(function (err) {
      if (err) {
        console.log('please refresh');
      } else {
        HttpUtil.sendAuthenticatedRequest("GET", "offers", t.setItems.bind(t));
      }
    });
  }
  setItems(items) {
    var json_items = JSON.parse(items);
    this.setState({
      items: json_items
    });
    this.child.setMarkers(json_items);
  }
  render() {
    return (
      <div>
        <Menu/>
        <div className="content">
          <div className="left">
            <Map onRef={ref => (this.child = ref)}/>
          </div>
          <div className="right">
            <Listing itemsProp={this.state.items}/>
          </div>
        </div>
      </div>
    );
  }
}
