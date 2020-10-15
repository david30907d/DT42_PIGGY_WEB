import React from "react";
import { Form, Button } from "semantic-ui-react";

class Login extends React.Component {
  state = { password: "", email: "" };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    fetch("http://127.0.0.1:8000/auth", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("Success:", response);
        let storage = window.localStorage;
        storage["jwt"] = response["access_token"];
      });
  };

  render() {
    const { password, email } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <Form.Input
            placeholder="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <Form.Button content="Submit" />
        </Form.Group>
      </Form>
    );
  }
}

export default Login;
