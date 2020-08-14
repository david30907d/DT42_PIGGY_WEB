import React from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
const fs = require('fs');

var required = true;
export default class FormExampleFieldErrorLabel extends React.Component {
    handleSubmit() {
        let student = { "payload": { "dd22d222222": 2 }, "filepath": "./" };
        let url = 'http://127.0.0.1:9000/settings';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(student),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json())
        .then(jsonData => console.log(jsonData))
        .catch(err => console.log('錯誤:', err))
    }
    render() {
        return (<Form success={required}>
            <Form.Input
                error={{ content: 'Please enter your first name', pointing: 'below' }}
                fluid
                label='Application'
                placeholder='Name of camera'
                id='form-input-first-name'
            />
            <Form.Input
                error='Please enter your last name'
                fluid
                label='Source'
                placeholder='rtsp://ip'
            />
            <Form.Input
                error='Please enter your last name'
                fluid
                label='Codec'
                placeholder='rtsp://ip'
            />
            <Form.Input
                fluid
                label='Width'
                placeholder='In width'
            />
            <Form.Input
                fluid
                label='Height'
                placeholder='In cm'
            />
            <Message
                success
                header='Form Completed'
                content="You're all signed up for the newsletter"
            />
            <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>)
    }
}