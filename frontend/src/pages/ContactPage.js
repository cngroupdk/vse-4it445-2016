import React, { Component } from 'react';

import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import api from '../api.js';

export class ContactPage extends Component {
  constructor(props) {
    super(props);

    this.uploadContactForm = this.uploadContactForm.bind(this);
  }

  uploadContactForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    api.post('contact/submit', formData)
      .then(({ data }) => {
        console.log('---> data:', data)
        debugger;

        this.setState({ error: null });
      })
      .catch(error => {
        const { response } = error;
        const { message = "Login failed..." } = response.data.error || {};
        console.log('---> error:', error);
        debugger;

        this.setState({ error: message });
      });
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Contact</h1>
        </div>
        <h2>Contact Form</h2>
        <form onSubmit={this.uploadContactForm} enctype="multipart/form-data">
          <FormGroup controlId="name">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              type="text"
              name="name"
            />
          </FormGroup>
          <FormGroup controlId="email">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              type="email"
              name="email"
            />
          </FormGroup>
          <FormGroup controlId="note">
            <ControlLabel>Note</ControlLabel>
            <FormControl
              name="note"
              componentClass="textarea"
              placeholder="Note..."
              rows="10"
            />
          </FormGroup>
          <FormGroup controlId="attachment">
            <ControlLabel>Attachment</ControlLabel>
            <FormControl type="file" name="attachment" />
          </FormGroup>
          <div>
            <Button bsStyle="primary" type="submit">Send</Button>
          </div>
        </form>
      </div>
    );
  }
}

