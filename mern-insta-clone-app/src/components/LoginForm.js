import React from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import logo from '../Assets/instalogo.png';
function LoginForm() {
    return (
        <div><center>
            <Card className = "logincard1">
                <center><img src={logo} width='65%' ></img></center>
                <Card.Body>
                    
                    

                    <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control className ="textlogin" type="email" placeholder="Phone number, username, or email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control className ="textlogin" size="sm" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className ="buttonlogin" variant="primary" type="submit" size = "sm" block>
                        Log In
                    </Button>
                    </Form>    
                    <h6></h6>



                    <div className="separator">
                        <div className="line"></div>
                        <p style={{fontSize:'13px', fontWeight:'600'}}>OR</p>
                        <div className="line"></div>
                    </div>
                        
                        <div className="forgotPasswordText">
                            <a href="" style={{textDecoration:"none",color:"#999"}}>
                            Forgot Password ?
                            </a>
                            
                </div>
                </Card.Body>
            </Card>
            <h6></h6>
            <Card className = "logincard1"><Card.Body><Card.Text
                 style={{fontSize:'13px', color:'#262626'}}>Don't have an account?  <a href="/signup">Sign up</a>
            </Card.Text></Card.Body>
            </Card>
            </center>
        </div>
    )
}

export default LoginForm
