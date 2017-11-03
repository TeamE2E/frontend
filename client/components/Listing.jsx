import React from 'react';
import ListItem from './ListItem.jsx';

export default class Listing extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
    var createItems = this.props.itemsProp.map(function(item) {
        return(<ListItem itemProp={item}/>)
    });
    return (
      <div>
        {createItems}
       </div>
    );
  }
}
