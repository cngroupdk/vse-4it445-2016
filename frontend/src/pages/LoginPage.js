import React, { Component } from 'react';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { connect } from 'react-redux';

import api from '../api.js';
import { loginAction, logoutAction } from '../actions';

export class LoginPage extends Component {
  render() {
    const { loginAction, logoutAction } = this.props;
    return (
      <div>
        <div className="jumbotron">
          <h1>Login</h1>
        </div>
        <button
          className="btn"
          onClick={() => {
            logoutAction();
            api.post('users/logout')
              .then(() => {
                alert('Logout success');
              })
              .catch(() => {
                // ignore error
              });
          }}
        >
          Logout
        </button>
        <LoginForm loginAction={loginAction} />
      </div>
    );
  }
}

export default connect(undefined, {
  loginAction,
  logoutAction,
})(LoginPage)
