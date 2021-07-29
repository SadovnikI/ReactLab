import React, {Component} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import  { Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";
class Nav extends Component{

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
        if (this.props.user){
            return (
                <div className="topnav">
                <Link to='/' >
                User list
                </Link>
                <Link to='/wallets/' >
                    {this.props.user.username} Wallets
                </Link>
                <Link to='/cabinet/' >
                    {this.props.user.username} Cabinet
                </Link>
                <Link to='/' style={{float: "right"}} onClick={() => {localStorage.clear();window.location.href="/"}}>
                Log out
                </Link>
            </div>
            );
        }
        else{
        return (
            <div className="topnav">
                <Link to='/' >
                User list
                </Link>
                <Link to='/login' >
                User Cabinet
                </Link>
                <Link to='/login' style={{float: "right"}} >
                Log in
                </Link>
            </div>

        )
            }
    }
}

export default Nav;