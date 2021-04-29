import React, {Component, useEffect, useState} from 'react'
import Nav from "./Nav";
import UserDetail from "./UserDetail";
import UserCabinet from "./UserCabinet";
import UserUpdate from "./UserUpdate";
import axios from "axios";

class ProfileSettings extends Component {

    state = {};
    componentDidMount() {
        const config={
            headers:{
                Authorization: 'Token '+ localStorage.getItem('token')
            }
        };

        axios.get('http://127.0.0.1:8000/api/auth/user',config).then(res => {this.setState({user:res.data})}).catch(err =>{
                this.forceUpdate();
            })

    }


    render() {
        if (this.state.user) {
            return (
                <div>
                    <Nav/>
                    <UserDetail url={'http://127.0.0.1:8000/api/userdetail/' + this.state.user.id + '/'} delete={true}/>
                    <UserUpdate/>
                </div>
            )
        }
        else{
            return (
            <div/>
        );
        }
    }
}

export default ProfileSettings;