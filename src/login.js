import React from "react";
import { Form, Button } from "semantic-ui-react";

const Login = () => (
  <Form success>
    <Form.Input label="Email" placeholder="test@test.com" />
    <Form.Input label="Enter Password" type="password" />
    <Button>Submit</Button>
  </Form>
);

export default Login;
