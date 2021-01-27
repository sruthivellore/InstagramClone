import React from 'react'
import {Form, Button, Card, Navbar} from 'react-bootstrap'
import logo from '../../Assets/instalogo.png';
import reslogo from '../../Assets/passres.png'
import FeedPost from './FeedPost';
function FeedsMain() {
    return (
        <div>
            <Navbar bg="white" expand="sm" className='FeedsNavBar'>
                <Navbar.Brand><img src={logo} width ='269rem' style ={{paddingLeft:'6rem'}} /></Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            
                <center>
                    <FeedPost />

                </center>
        </div>
    )
}

export default FeedsMain
