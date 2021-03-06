import React, { Component } from "react";
import { Button }  from "react-bootstrap";
import { NavLink } from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div>
                <h1>About</h1>
            
                <p> Find local yard sales near you every weekend! </p>

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