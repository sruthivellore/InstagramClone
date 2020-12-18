import React from 'react'
import {Form, Button, Card, Navbar} from 'react-bootstrap'
import logo from '../Assets/instalogo.png';
import reslogo from '../Assets/passres.png'
function ForgotPassword() {
    return (
        <div><center>
            <Navbar bg="white" expand="lg" className="ForgotPasswordNavBar">
                <img src={logo} width ='269rem' style ={{paddingLeft:'6rem'}} /></Navbar>
            <Card className = "logincard1" style={{width:'18rem'}}>
                <center><img src={reslogo} width='45%' ></img></center>
            <Card.Body>
                 <Card.Subtitle className="mb-2 text-muted" style={{fontSize:'13px'}}>Enter your email, phone, or username and we'll send you a link to get back into your account.</Card.Subtitle>
                    <h5></h5>
                    <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control className ="textlogin" type="email" placeholder="Mobile number or Email" />

                    </Form.Group>
                    <Button className ="buttonlogin" variant="primary" type="submit" size = "sm" block>
                        Send Login Link
                    </Button>
                    </Form><br></br>
                    <div className="separator">
                        <div className="line"></div>
                        <p style={{fontSize:'13px', fontWeight:'600'}}>OR</p>
                        <div className="line"></div>
                    </div>    
                    <a href="/signup" style={{fontSize:'13px', color:'#262626', textDecoration:'none'}}><strong>Create New Account</strong></a>
                    
                </Card.Body>
                <Card.Footer style={{width:'18rem', marginLeft:'-0.5rem'}} className="text-muted"><Card.Text>
                    <a href="/" style={{textDecoration:'none',fontSize:'13px', color:'#262626' }}><strong>Back To Login</strong></a>
                    </Card.Text></Card.Footer>
                {/* <Button variant="light">Light</Button> */}
            </Card>

            </center>
        </div>
    )
}

export default ForgotPassword
