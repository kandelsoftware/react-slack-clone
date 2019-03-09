import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Icon,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

export default class Register extends Component {
  render() {
    return (
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="orange" textAlign="centre">
            <Icon name="puzzle piece" color="orange" />
            Register for Devchat
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                name="username"
                icon="user"
                iconPosition="left"
                placeholder="Username"
                onChange={this.handleChange}
                type="text"
              />
              <Form.Input
                fluid
                name="email"
                icon="email"
                iconPosition="left"
                placeholder="email"
                onChange={this.handleChange}
                type="email"
              />
              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="password"
                onChange={this.handleChange}
                type="password"
              />
              <Form.Input
                fluid
                name="passwordConformation"
                icon="lock"
                iconPosition="left"
                placeholder="passwordConformation"
                onChange={this.handleChange}
                type="password"
              />

              <Button color="orange" fluid size="large">
                Submit
              </Button>
            </Segment>
            <Message>
              Already a uuser? <Link to="/login">Login </Link>
            </Message>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}
