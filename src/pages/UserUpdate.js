import React, {Component} from "react";
import axios from "axios";

class UserUpdate extends Component {

    state = {
        id: "",
        username: "",
        old_password: "",
        new_password: "",
        email: "",
        description: ""
    };

    username = '';
    email = '';
    description = '';
    password = '';
    password2 = '';
    flag=false
    componentDidMount() {
        const config = {
            headers: {
                Authorization: 'Token ' + localStorage.getItem('token')
            }
        };

        axios.get('http://127.0.0.1:8000/api/auth/user', config).then(res => {
            this.setState({user: res.data})

        }).catch(err => {
            this.forceUpdate();
        })

    }


    onSubmit = e => {

        e.preventDefault();
        const data = {
            id: this.state.user.id,
            username: this.username,
            old_password: this.password,
            new_password: this.password2,
            email: this.email,
            description: this.description
        };
        if (this.username === ''&& this.email === ''&& this.description === '' && this.password === ''&& this.password2 === '')
        {
            this.flag = true;
            this.forceUpdate();
        }
        else{
            axios.post('http://127.0.0.1:8000/api/cabinet/modify_user', data).then(res => {
                console.log(1)
                window.location.reload()
            }).catch(err => {
                this.flag = true;
                this.forceUpdate();
            })
            }
    };


    render() {
        if(this.flag)
        {
            return (
                <form onSubmit={this.onSubmit}>
                <div className="wideblocke" style={{color: 'red', fontSize: 15,minHeight:0}}><h2>Invalid Data</h2></div>
                <div className="wideblockre">
                    <h4>User info</h4>
                    <div className="datablock">
                        <div className="inputblock">
                            <label className="l3">Username</label>
                            <input type="text" onChange={e => this.username = e.target.value}/>
                        </div>
                        <div className="inputblock">
                            <label className="l4">Email</label>
                            <input type="text" onChange={e => this.email = e.target.value}/>
                        </div>
                        <div className="inputblock">
                            <label className="l5">About User</label>
                            <input type="text" onChange={e => this.description = e.target.value}/>
                        </div>
                        <div className="inputblock">
                            <label className="l6">Image</label>
                            <div className="upload-btn-wrapper">
                                <label className="btn">
                                    <span className="title">Add image</span>
                                    <input type="file"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wideblockre">
                    <h4>Security</h4>
                    <div className="datablock">
                        <div className="inputblock">
                            <label className="l1">Current password</label>
                            <input type="password" onChange={e => this.password = e.target.value}/>
                        </div>
                        <div className="inputblock">
                            <label className="l2">New password</label>
                            <input type="password" onChange={e => this.password2 = e.target.value}/>
                        </div>
                    </div>
                    <br/><br/><br/>
                    <button type="submit" className="button">Save</button>

                </div>
            </form>
            )
        }
        return (
            <form onSubmit={this.onSubmit}>
                <div className="wideblockre">
                    <h4>User info</h4>
                    <div className="datablock">
                        <div className="inputblock">
                            <label className="l3">Username</label>
                            <input type="text" onChange={e => this.username = e.target.value}/>
                        </div>
                        <div className="inputblock">
                            <label className="l4">Email</label>
                            <input type="text" onChange={e => this.email = e.target.value}/>
                        </div>
                        <div className="inputblock">
                            <label className="l5">About User</label>
                            <input type="text" onChange={e => this.description = e.target.value}/>
                        </div>
                        <div className="inputblock">
                            <label className="l6">Image</label>
                            <div className="upload-btn-wrapper">
                                <label className="btn">
                                    <span className="title">Add image</span>
                                    <input type="file"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wideblockre">
                    <h4>Security</h4>
                    <div className="datablock">
                        <div className="inputblock">
                            <label className="l1">Current password</label>
                            <input type="password" onChange={e => this.password = e.target.value}/>
                        </div>
                        <div className="inputblock">
                            <label className="l2">New password</label>
                            <input type="password" onChange={e => this.password2 = e.target.value}/>
                        </div>
                    </div>
                    <br/><br/><br/>
                    <button type="submit" className="button">Save</button>

                </div>
            </form>
        );
    };
}

export default UserUpdate;