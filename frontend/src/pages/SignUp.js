import React, { Component } from "react";
import { Button, Form }  from "react-bootstrap";

class SignUp extends Component {
    render() {
        return (
            <div>
                <h1>Sign Up</h1>

                <Form> 
                    <Form.Group className="mb-3"  controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                    </Form.Group>
            
                    <Form.Group className="mb-3"  controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control type="text" placeholder="Enter zip code"/>
                    </Form.Group>

                    <div className="text-center">
                        <Button variant="primary">Submit</Button>
                    </div>
                </Form>

            </div>
        )
    }
}

export default SignUp;