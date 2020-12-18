import React from 'react'
import {Form, Button, Card, Navbar} from 'react-bootstrap'
import logo from '../../Assets/instalogo.png';
import reslogo from '../../Assets/passres.png'
import FeedPost from './FeedPost';
function FeedsMain() {
    return (
        <div>
            <Navbar bg="white" expand="sm" className='FeedsNavBar'>
                <img src={logo} width ='269rem' style ={{paddingLeft:'6rem'}} /></Navbar>
            
                <center>
                    <FeedPost />

                </center>
        </div>
    )
}

export default FeedsMain
