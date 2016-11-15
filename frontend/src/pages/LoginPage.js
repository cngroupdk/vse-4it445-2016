import React, { Component } from 'react';
import { LoginForm } from '../components/LoginForm/LoginForm';

export class LoginPage extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Login</h1>
        </div>
        <LoginForm />
      </div>
    );
  }
}

