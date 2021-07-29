import React, {Component} from 'react'

import axios from "axios";


export class RegistrationPage extends Component {
    state = {
        username: '',
        password: '',
        password2: '',
        role: ''
    };

    onSubmit = e =>{
        e.preventDefault();
        if (this.password==this.password2) {

            const data = {
                username: this.username,
                 email: "defolt@f.com",
                password: this.password,
                is_superuser: (this.role === 'true')
            };
            axios.post('http://127.0.0.1:8000/api/auth/register',data).then(res => {
                localStorage.setItem('token',res.data.token)
                this.props.history.push('/');
            }).catch(err =>{
                this.flag=true;
                this.forceUpdate();
            })
        }
        else {
            this.flag=true;
            this.forceUpdate();
        }

    };




    render() {
         if (this.flag) {
            return (
                <div className="login_registration">
                <h1>Registration to Web App</h1>
                <h2 style={{color:'red', fontSize:14,marginBottom: 15, marginLeft:0,marginRight:0,marginTop:10}}>Invalid credentials</h2>
                <form method="post" onSubmit={this.onSubmit}>
                    <p><input type="text" name="username"  placeholder="Username" onChange={e => this.username = e.target.value}/></p>
                    <p><input type="password" name="password"  placeholder="Password" onChange={e => this.password = e.target.value}/></p>
                    <p><input type="password" name="password2"  placeholder="Confirm Password" onChange={e => this.password2 = e.target.value}/></p>
                    <div className="form_radio_btn"><input type="radio" name="role" id="role1" value="true" onChange={e => this.role = e.target.value}/><label htmlFor="role1">Admin</label></div>
                    <div className="form_radio_btn"><input type="radio" name="role" id="role2" value="false" checked="checked" onChange={e => this.role = e.target.value}/><label htmlFor="role2">User</label></div>

                    <p className="submit"><input type="submit" name="commit" value="Submit"/></p>
                </form>
            </div>);
         }
        return (
            <div className="login_registration">
                <h1>Registration to Web App</h1>

                <form method="post" onSubmit={this.onSubmit}>
                    <p><input type="text" name="username"  placeholder="Username" onChange={e => this.username = e.target.value}/></p>
                    <p><input type="password" name="password"  placeholder="Password" onChange={e => this.password = e.target.value}/></p>
                    <p><input type="password" name="password2"  placeholder="Confirm Password" onChange={e => this.password2 = e.target.value}/></p>
                    <div className="form_radio_btn"><input type="radio" name="role" id="role1" value="true" onChange={e => this.role = e.target.value}/><label htmlFor="role1">Admin</label></div>
                    <div className="form_radio_btn"><input type="radio" name="role" id="role2" value="false" checked="checked" onChange={e => this.role = e.target.value}/><label htmlFor="role2">User</label></div>

                    <p className="submit"><input type="submit" name="commit" value="Submit"/></p>
                </form>
            </div>
        )
    }


}


export default RegistrationPage;

