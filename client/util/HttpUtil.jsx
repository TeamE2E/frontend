const createReactClass = require('create-react-class');

const HttpUtil = createReactClass({
  statics: {
    getCredentials: function(callback) {
      if (typeof(Storage) !== "undefined") {
        if(localStorage.getItem("access-token") === null) {
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
             if (this.readyState == 4 && this.status == 200) {
                localStorage.setItem("access-token", this.getResponseHeader("access-token"));
                localStorage.setItem("client", this.getResponseHeader("client"));
                localStorage.setItem("uid", this.getResponseHeader("uid"));
                callback(null);
             } else if(this.status == 401) {
                callback('Unauthorized');
             }
          };
          xhttp.open("POST", "http://46.101.179.83:3000/auth/sign_in", true);
          xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          xhttp.send("email=test@test.com&password=12345678");
          console.log("Requested data!");
        } else {
          console.log("Data in storage!");
          callback(null);
        }
      } else {
        console.log("Unsupported!");
      }
    },
    purgeCredentials: function() {
      localStorage.removeItem("access-token");
      localStorage.removeItem("client");
      localStorage.removeItem("uid");
      // this.getCredentials();
    },
    sendAuthenticatedRequest: function(method, endpoint, successFunc) {
      var instance = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            successFunc(this.responseText);
         } else if(this.status == 401) {
            console.log('Please refresh');
            HttpUtil.purgeCredentials();
         }
      };
      xhttp.open(method, "http://46.101.179.83:3000/" + endpoint, true);
      xhttp.setRequestHeader("access-token", localStorage.getItem("access-token"));
      xhttp.setRequestHeader("client", localStorage.getItem("client"));
      xhttp.setRequestHeader("uid", localStorage.getItem("uid"));
      xhttp.send();
    }
  },
  render() {
  },
});

export default HttpUtil;
