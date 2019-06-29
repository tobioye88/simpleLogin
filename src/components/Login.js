import React from 'react';
import { Form, FormGroup, Input, Label, Button, Col, FormFeedback } from 'reactstrap';

class Login extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            password: '',
            isUsernameValid: false,
            isUsernameInvalid: false,
            buttonDisabled: true,
            usernameHasRecievedFocus: false,
            passwordHasRecievedFocus: false,
            validUsername: false,
            validPassword: false,
            isPasswordValid: false,
            isPasswordInvalid: false,
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validateUsername = this.validateUsername.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.onFocus = this.onFocus.bind(this);
    }

    onFocus(e){
        if(e.target.name === 'username'){
            this.setState({...this.state, usernameHasRecievedFocus: true});
        }else{
            this.setState({...this.state, passwordHasRecievedFocus: true});
        }
    }

    changeState(key, value){
        this.setState({[key]: value});
    }

    validateUsername(e){
        let username = e.target.value;
        let {validUsername, validPassword} = this.state;
        if(username.length > 6 && this.state.usernameHasRecievedFocus){
            validUsername = true;
            let buttonDisabled = (!validUsername || !validPassword);
            this.setState({...this.state, username, isUsernameValid: true, isUsernameInvalid: false, validUsername, buttonDisabled});
        }else{
            validUsername = false;
            this.setState({...this.state, username, isUsernameValid: false, isUsernameInvalid: true, buttonDisabled: (!validUsername || !validPassword)});
        }
    }

    validatePassword(e){
        let password = e.target.value;
        let {validUsername, validPassword} = this.state;
        if(password.length > 6 && this.state.passwordHasRecievedFocus){
            console.log("valid Password");
            validPassword = true;
            this.setState({...this.state, password, isPasswordValid: true, isPasswordInvalid: false, validPassword, buttonDisabled: (!validUsername || !validPassword)});
        }else{
            validPassword = false;
            this.setState({...this.state, password, isPasswordValid: false, isPasswordInvalid: true, buttonDisabled: (!validUsername || !validPassword)});
        }
    }

    onSubmit(e){
        e.preventDefault();
        alert("Submited");
    }

    render(){
        const {isUsernameValid, isUsernameInvalid, username, password, buttonDisabled, isPasswordValid, isPasswordInvalid} = this.state;
        return (
            <Col md={this.props.md}>
                <Form className="border border-grey p-3 rounded shadow bg-white" onSubmit={this.onSubmit}>
                    <h1 className="py-3 text-center">Login</h1>
                    {/* <hr /> */}
                    <FormGroup>
                        <Label>Username</Label>
                        <Input type="text" 
                            value={username} 
                            onFocus={this.onFocus} 
                            onChange={this.validateUsername} 
                            name="username" 
                            valid={isUsernameValid} 
                            invalid={isUsernameInvalid}/>
                        <FormFeedback>Invalid username</FormFeedback>
                        {/* <FormText>Email address</FormText> */}
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" 
                            value={password} 
                            onFocus={this.onFocus} 
                            onChange={this.validatePassword} 
                            name="password"
                            valid={isPasswordValid} 
                            invalid={isPasswordInvalid}/>
                        <FormFeedback>Invalid password</FormFeedback>
                    </FormGroup>
                    <div className="text-right text-muted mb-3"><small>Forgot password?</small></div>
                    <FormGroup>
                        <Button type="submit" color="primary" block disabled={buttonDisabled}>Login</Button>
                    </FormGroup>
                    <FormGroup>
                        <Button type="button" color="link" block >Create Account?</Button>
                    </FormGroup>
                </Form>
            </Col>)
    }
}

Login.defaultPops = {
    md: 4
}

export {Login};