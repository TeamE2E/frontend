import React from 'react';
import Search from './Search.jsx';
import Listing from './Listing.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
    };
  }
  setItems(items) {
    this.setState({
      items: items
    });
  }
  render() {
    return (
      <div>
        <Listing itemsProp={this.state.items}/>
      </div>
    );
  }
}
