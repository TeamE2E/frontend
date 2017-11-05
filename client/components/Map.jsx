import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

var user_image = {
    url: '../client/me.png',
    scaledSize: new google.maps.Size(56, 56),
};

var car_image = {
    url: '../client/marker_small_black.png',
    scaledSize: new google.maps.Size(16, 16),
};

const MyMap = withGoogleMap(props =>
  <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: 50.0870471, lng: 14.4205023 }}>
      {props.markers.map(marker => (
        <Marker
          key={marker.id}
          position={{ lat: marker.lat, lng: marker.lng }}
          icon={marker.isUser ? user_image : car_image}
        />
      ))}
  </GoogleMap>
);

export default class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markers: [
        {
          id: 23434355,
          lat: 50.0870471,
          lng: 14.4205023,
          isUser: true
        }
      ],
    };
  }
  componentDidMount() {
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
  }
  setMarkers(api_response) {
    var users = api_response.flatMap(function(x) {
      return x.user;
    });
    var locations = users.flatMap(function(x) {
      return x.location;
    })
    var markers = [{
      id: 23434355,
      lat: 50.0870471,
      lng: 14.4205023,
      isUser: true
    }].concat(locations)
    this.setState({
      markers: markers
    });
  }
  addMarker(lat, lng, id) {
    var items = this.state.markers;
    var markers_new = [{lat, lng}, id].concat(markers);
    this.setState({
      markers: markers_new
    });
  }
  clearMarkers() {
    this.setState({
      markers: []
    });
  }
  render() {
    return(
      <MyMap
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        markers={this.state.markers} />
    );
  }
}
