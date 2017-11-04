import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

var image = {
    url: '../client/me.png',
    scaledSize: new google.maps.Size(56, 56),
};

const MyMap = withGoogleMap(props =>
  <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: 50.0870471, lng: 14.4205023 }}>
    {props.map(function(prop) {
      return(<Marker position={{ lat: 50.0870471, lng: 14.4205023 }} icon={image}/>)
    })}
  </GoogleMap>
);

export default class Map extends React.Component {
  render() {
    return(
      <MyMap
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />} />
    );
  }
}
