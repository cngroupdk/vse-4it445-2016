import React, { Component } from 'react';

import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

import api from '../../api.js';

export class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    api.post('users/login', formData)
      .then(({ data }) => {
        this.setState({ error: null });
        alert('Success!');
      })
      .catch(error => {
        const { response } = error;
        const { message = "Login failed..." } = response.data.error || {};

        this.setState({ error: message });
      });
  }


  render() {
    const { router } = this.props;
    console.log('---- router', router);
    const { error } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            {[
              ['email', 'Email', 'text'],
              ['password', 'Password', 'password'],
            ].map(([key, label, type], index) => {
              return (
                <FormGroup
                  validationState={error !== null ? "error" : undefined}
                  key={key}
                  controlId={key}
                >
                  <ControlLabel>{label}</ControlLabel>
                  {index > 0
                    ? null
                    : <HelpBlock>{error}</HelpBlock>
                  }
                  <FormControl type={type} name={key} />
                </FormGroup>
              );
            })}
          </div>
          <div>
            <button className="btn btn-primary" type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

