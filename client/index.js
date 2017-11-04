import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Summary from './components/Summary.jsx';
import Listing from './components/Listing.jsx';
import { Locations, Location } from 'react-router-component'
import HttpUtil from './util/HttpUtil.jsx';
import './styles.css';

HttpUtil.getCredentials();

var app = ReactDOM.render(
  <Locations hash>
    <Location path="/" handler={App} />
    <Location path="/confirm/:id" handler={Summary} />
  </Locations>,
  document.getElementById('root')
);
