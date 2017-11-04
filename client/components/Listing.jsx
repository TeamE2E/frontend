import React from 'react';
import Search from './Search.jsx';
import ListItem from './ListItem.jsx';

export default class Listing extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
    var createItems = this.props.itemsProp.map(function(item) {
        return(<ListItem itemProp={item}/>)
    });
    return(
      <div>
        <Search />
        {createItems}
       </div>
    );
  }
}
