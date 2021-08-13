import React, { Component } from "react";
import { Button, Form }  from "react-bootstrap";
import { NavLink } from 'react-router-dom';

class SignUp extends Component {
    
    state = {
        email: "",
        zip: "",
    };
    
    onSubmit = () => {
        console.log(this.state.email, this.state.zip);
    }
    
    onEmailChange = e => {
        this.setState({email: e.target.value, zip: this.state.zip});
    } 

    onZipChange = e => {
        this.setState({email: this.state.email, zip: e.target.value});
    } 
    
    render() {

        return (
            <div>
                <h1>Sign Up</h1>

                <Form> 
                    <Form.Group className="mb-3"  controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                            value={this.state.email}
                            onChange={this.onEmailChange}
                            type="email" 
                            placeholder="Enter email"
                        />
                    </Form.Group>
            
                    <Form.Group className="mb-3"  controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control 
                            value={this.state.zip}
                            onChange={this.onZipChange}
                            type="text" 
                            placeholder="Enter zip code"
                        />
                    </Form.Group>

                    <div className="text-center">
                        <NavLink to="/thank-you">
                            <Button 
                                variant="primary"
                                onClick={this.onSubmit}
                            >
                                Submit
                            </Button>
                        </NavLink>
                    </div>
                </Form>

            </div>
        )
    }
}

export default SignUp;