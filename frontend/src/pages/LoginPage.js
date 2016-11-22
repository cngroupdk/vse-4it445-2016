import React, { Component } from 'react';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { connect } from 'react-redux';

import { loginAction } from '../actions';

class LoginPage extends Component {
  render() {
    const { loginAction } = this.props;
    return (
      <div>
        <div className="jumbotron">
          <h1>Login</h1>
        </div>
        <LoginForm loginAction={loginAction} />
      </div>
    );
  }
}

function mapPropsToState(state) {
  return {

  }
}

export default connect(mapPropsToState, { loginAction })(LoginPage)
