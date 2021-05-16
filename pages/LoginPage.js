import React, { Component } from 'react'

import axios from "axios";
import {Link} from "react-router-dom";


export class LoginPage extends Component{
    state = {
        username: '',
        password: '',
    };

     onSubmit = e =>{
        e.preventDefault();
        const data = {
                username: this.username,
                password: this.password,
            };
         axios.post('http://127.0.0.1:8000/api/auth/login',data).then(res => {
                localStorage.setItem('token',res.data.token);
                this.props.history.push('/');
            }).catch(err =>{
                this.flag=true;
                this.forceUpdate();

            })
    };


    render() {
        if (this.probs.flag) {
            return (
                <div className="login_registration">
                    <h1>Login to Web App</h1>
                    <h2 style={{color:'red', fontSize:14,marginBottom: 15, marginLeft:0,marginRight:0,marginTop:10}}>Invalid credentials</h2>
                    <form method="post" onSubmit={this.onSubmit}>
                        <p><input type="text" name="username" placeholder="Username"
                                  onChange={e => this.username = e.target.value}/></p>
                        <p><input type="password" name="password" placeholder="Password"
                                  onChange={e => this.password = e.target.value}/></p>
                        <p className="submit"><b className="reg" >New user? <Link to={'/registration'}>Register now</Link></b>
                            <input type="submit" name="commit" value="Login"/></p>


                    </form>

                </div>
            );
        } else {
            return (
                <div className="login_registration">
                    <h1>Login to Web App</h1>
                    <form method="post" onSubmit={this.onSubmit}>
                        <p><input type="text" name="username" placeholder="Username"
                                  onChange={e => this.username = e.target.value}/></p>
                        <p><input type="password" name="password" placeholder="Password"
                                  onChange={e => this.password = e.target.value}/></p>
                        <p className="submit"><b className="reg" >New user? <Link to={'/registration'}>Register now</Link></b>
                            <input data-testid='submit' type="submit" name="commit" value="Login"/></p>


                    </form>

                </div>
            );
        }
    }
}

export default LoginPage;