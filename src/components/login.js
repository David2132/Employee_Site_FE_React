import React from 'react';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            submit: false,
            emailError:"",
            passwordError:""
        }
        this.validate = this.validate.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    validate() {
        if (this.state.username === 'David@email.com' && this.state.password === 'Password') {
            window.location.href = "/employees";
        }
        else {
            alert("Username and/or Password is incorrect!!!");
        }
        let emailError="";
        let passwordError="";
        if (!this.state.username.includes("@")){
            emailError+="Not a valid email "
        }
        else if (this.state.username.length <8){
            emailError += "\nEmail has to be minimum 8 characters"
        }
        else if (this.state.username.length > 35){
            emailError += "Email has to be maximum 35 character "
        }
        if (this.state.password.length <8){
            passwordError = "Password has to be minimum 8 characters"
        }
        else if (this.state.username.length > 35){
            passwordError = "Password has to be maximum 35 character "
        }


        this.setState({
            ...this.state,
            emailError,
            passwordError,
        })
    }
    handleChange(event) {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }
    render() {
        const style = {
            marginLeft: '35%',
            width: '30%',
            border: '2px solid black'
        }

        return (
            <div>
                <Table style={style}>
                    <thead>
                        <tr>
                            <td colSpan='2'>
                                <h2 style={{ textAlign: 'center' }}>
                                    User Login
                                </h2>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ textAlign: 'center' }}>
                                <b>
                                    Email:
                                </b>
                            </td>
                            <td>
                                <input
                                    type='text'
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                >
                                </input>
                                <br></br>
                                <b style ={{color:'red'}}>
                                    {this.state.emailError}
                                </b>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: 'center' }}>
                                <b>
                                    Password:
                                </b>
                            </td>
                            <td>
                                <input
                                    type='password'
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                >
                                </input>
                                <br></br>
                                <b style ={{color:'red'}}>
                                    {this.state.passwordError}
                                </b>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <Button onClick={this.validate} style={{ marginLeft: '40%' }}>
                                    Login
                            </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>)
    }
}
export default Login