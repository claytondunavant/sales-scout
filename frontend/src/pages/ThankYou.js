import React, { Component } from "react";
import { Button }  from "react-bootstrap";
import { NavLink } from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div>
                <h1>Thank You!</h1>
            
                <p> Thank you for signing up! </p>
            
                <div className="text-center">
                    <NavLink to="/">
                        <Button variant="primary">Return Home</Button>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default About