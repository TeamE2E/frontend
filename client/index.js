import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Summary from './components/Summary.jsx';
import Listing from './components/Listing.jsx';
import './styles.css';

getCredentials();

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
      app.setItems(JSON.parse(this.responseText))
      console.log(JSON.parse(this.responseText));
   } else if(this.status == 401) {
      purgeCredentials()
   }
};
xhttp.open("GET", "http://46.101.179.83:3000/offers", true);
xhttp.setRequestHeader("access-token", localStorage.getItem("access-token"));
xhttp.setRequestHeader("client", localStorage.getItem("client"));
xhttp.setRequestHeader("uid", localStorage.getItem("uid"));
xhttp.send();

var app = ReactDOM.render(
  <Summary />,
  document.getElementById('root')
);

function getCredentials() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.getItem("access-token") === null) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            localStorage.setItem("access-token", this.getResponseHeader("access-token"));
            localStorage.setItem("client", this.getResponseHeader("client"));
            localStorage.setItem("uid", this.getResponseHeader("uid"));
         } else if(this.status == 401) {
            purgeCredentials();
         }
      };
      xhttp.open("POST", "http://46.101.179.83:3000/auth/sign_in", true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send("email=test@test.com&password=12345678");
      console.log("Requested data!");
    } else {
      console.log("Data in storage!");
    }
  } else {
    console.log("Unsupported!");
  }
}

function purgeCredentials() {
  localStorage.removeItem("access-token");
  localStorage.removeItem("client");
  localStorage.removeItem("uid");
  getCredentials();
}
