import React from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import logo from '../Assets/instalogo.png';
function SignUp() {
    return (
        <div><center>
            <Card className = "logincard1">
                <center><img src={logo} width='65%' ></img></center><h6></h6>
                <Card.Subtitle className="mb-2 text-muted" style={{fontSize:'17px', paddingLeft:'1.5rem', paddingRight:'1.5rem'}}>Sign up to see photos and vedios from your friends.</Card.Subtitle>
                <Card.Body>
                                     
         

                    <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control className ="textlogin" type="email" placeholder="Mobile number or Email" required/>

                        <Form.Control className ="textlogin" type="text" placeholder="Full Name" required/>
                        <Form.Control className ="textlogin" type="text" placeholder="Username" required/>
                        <Form.Control className ="textlogin" size="sm" type="password" placeholder="Password" required/>
                    </Form.Group>
                    <Button className ="buttonlogin" variant="primary" type="submit" size = "sm" block>
                        Sign up
                    </Button>
                    </Form>    
                    <h6></h6>
                    <Card.Text style={{fontSize:'12px', color:'gray'}}>
                    By signing up, you agree to our <strong>Terms , Data Policy </strong> and <strong>Cookies Policy</strong> .  
                    </Card.Text>

                </Card.Body>
            </Card>
            <h6></h6>
            <Card className = "logincard1"><Card.Body><Card.Text
                 style={{fontSize:'13px', color:'#262626'}}>Have an account?  <a href="/" style={{textDecoration:"none"}}>Log In</a>
            </Card.Text></Card.Body>
            </Card>
            </center>
        </div>
    )
}

export default SignUp
