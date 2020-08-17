import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import "./Google.scss";


//const CLIENT_ID = '240442920593-g47o67tcmpcqfmv4pvppffesq6rk7av5.apps.googleusercontent.com';




class GoogleBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      userDetails: {},
      isUserLoggedIn: false
    };
  }

  responseGoogle = response => {
    this.setState({ userDetails: response.profileObj, isUserLoggedIn: true });
  };

  logout = () => {
    this.setState({isUserLoggedIn: false})
  };

  render() {
    return (
      <div className="App">
        {!this.state.isUserLoggedIn && (
          <GoogleLogin
            clientId="240442920593-g47o67tcmpcqfmv4pvppffesq6rk7av5.apps.googleusercontent.com"
            buttonText = 'Login'
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
          />
        )}
        {this.state.isUserLoggedIn && (
          <div className="userDetails-wrapper">
            <div className="details-wrapper">


              <div className="name">
                Welcome Mr. {this.state.userDetails.givenName}{" "}
                {this.state.userDetails.familyName}
              </div>
              <div className="email"><i>{this.state.userDetails.email}</i></div>
            </div>
            <GoogleLogout
              buttonText='Logout'
              onLogoutSuccess={this.logout}
            />
          </div>

        )}
      </div>
    );
  }
}
export default GoogleBtn;
