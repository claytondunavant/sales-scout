import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>

                <div className="text-center">
                  <NavLink to="/sign-up">
                    <Button variant="primary">Sign Up</Button>
                  </NavLink>
            
                  <NavLink to="/about">
                    <Button variant="primary">About</Button>
                  </NavLink>
                </div>
            </div>
        )
    };
}

export default Home;