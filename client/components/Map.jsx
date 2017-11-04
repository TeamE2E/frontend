import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMap = withGoogleMap(props =>
  <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    <Marker position={{ lat: -34.397, lng: 150.644 }} icon={'../client/marker_small_black.png'}/>
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
