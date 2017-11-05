import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Summary from './components/Summary.jsx';
import Success from './components/Success.jsx';
import Listing from './components/Listing.jsx';
import { Locations, Location } from 'react-router-component'
import HttpUtil from './util/HttpUtil.jsx';

import './styles.css';
import './logo.png';
import './marker_small_black.png';
import './me.png';

Array.prototype.flatMap = function(lambda) {
    return Array.prototype.concat.apply([], this.map(lambda));
};

var app = ReactDOM.render(
  <Locations hash>
    <Location path="/" handler={App} />
    <Location path="/confirm/:id" handler={Summary} />
    <Location path="/success" handler={Success} />
  </Locations>,
  document.getElementById('root')
);
