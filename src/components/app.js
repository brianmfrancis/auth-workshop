import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  onFacebookLogin(response) {
    if (response.status !== 'not_authorized' && response.status !== 'unknown') {
      document.getElementById('facebook').innerHTML = `Welcome, ${response.name}! `;
      document.getElementById('facebook').innerHTML += `<img src="${response.picture.data.url}"/>`;
      document.getElementById('facebook').style = 'display: block';
    } else {
      document.getElementById('facebook').style = 'display: block';
    }
  }

  render() {
    // Add in FacebookLogin, GoogleLogin and FirebaseApp
    return (
      <div id="login">
        <div id="facebook">
          <FacebookLogin
            appId="160149781060349"
            autoLoad
            fields="name,email,picture.type(large)"
            callback={this.onFacebookLogin}
          />
        </div>
      </div>
    );
  }
}

export default App;
