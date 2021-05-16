import React, {Component, useEffect, useState} from 'react'
import Nav from "./Nav";
import UserDetail from "./UserDetail";
import WaletCard from "./WaletCard";
import Loader from "react-loader-spinner";
import axios from "axios";
class UserCabinet extends Component{
    state = {};
    componentDidMount() {
        if (this.props.location.state){
            const { id } = this.props.location.state;
            this.id=id;
            this.forceUpdate();
        }
        else{
            const config={
            headers:{
                Authorization: 'Token '+ localStorage.getItem('token')
            }
        };

        axios.get('http://127.0.0.1:8000/api/auth/user',config).then(res => {this.setState({user:res.data})}).catch(err =>{
                this.forceUpdate();
            })
        }

    }

    render() {

        if (this.id){
        return (
            <div>
                <Nav/>
                <UserDetail url={'http://127.0.0.1:8000/api/userdetail/' + this.id + '/'} />
                <div className="wideblockr"><h2>Wallets</h2></div>
                <WaletCard url={'http://127.0.0.1:8000/api/wallets/' + this.id + '/'}/>
            </div>
        );
        }
        else if (this.state.user){

            return (<div>
                <Nav/>
                <UserDetail url={'http://127.0.0.1:8000/api/userdetail/' + this.state.user.id + '/'} edit={true}/>
                <div className="wideblockr"><h2>Wallets</h2></div>
                <WaletCard url={'http://127.0.0.1:8000/api/wallets/' + this.state.user.id + '/'}/>
            </div>)
        }


        else{
            return (
            <div/>
        );
        }
    }

}

export default UserCabinet;