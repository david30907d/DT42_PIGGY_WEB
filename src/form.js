import React from "react";
import { Button, Form, Message } from "semantic-ui-react";

export default class FormExampleFieldErrorLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payload: {
        Application: "",
        Source: "",
        Codec: "",
        Width: "",
        Height: "",
      },
      filepath: "./",
      formStatus: null,
    };
  }
  handleChange = (e, { name, value }) => {
    let state = this.state;
    state.payload[name] = value;
    this.setState(state);
  };
  handleSubmit = () => {
    console.log(this.state);
    let url = "http://127.0.0.1:9000/settings";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((jsonData) => {
        this.setState({ formStatus: true });
        console.log(jsonData);
      })
      .catch((err) => console.log("error:", err));
  };
  render() {
    const { Application, Source, Codec, Width, Height } = this.state;
    return (
      <Form success={this.state.formStatus}>
        <Form.Input
          fluid
          label="Application"
          name="Application"
          value={Application}
          onChange={this.handleChange}
          placeholder="Name of camera"
          id="form-input-first-name"
        />
        <Form.Input
          fluid
          label="Source"
          name="Source"
          value={Source}
          onChange={this.handleChange}
          placeholder="rtsp://ip"
        />
        <Form.Input
          fluid
          label="Codec"
          name="Codec"
          value={Codec}
          onChange={this.handleChange}
          placeholder="rtsp://ip"
        />
        <Form.Input
          fluid
          label="Width"
          name="Width"
          value={Width}
          onChange={this.handleChange}
          placeholder="In width"
        />
        <Form.Input
          fluid
          label="Height"
          name="Height"
          value={Height}
          onChange={this.handleChange}
          placeholder="In cm"
        />
        <Message
          success
          header="Form Completed"
          content="You've finish all the settings of BerryNet!"
        />
        <Button onClick={this.handleSubmit}>Submit</Button>
      </Form>
    );
  }
}
