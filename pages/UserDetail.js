import React, {useEffect,useState} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";

import { useHistory } from "react-router-dom";

function UserDetail(probs) {

    const history = useHistory();

     useEffect(() =>{
        fetchdata();
        });

    const [items,setItems] =  useState(null);

    const fetchdata = async() =>{
        const data = await fetch(probs.url).then( response => response.json());
        setItems(data);
    };

    function handleClick(e) {
        e.preventDefault();
        const data = {
            id: items.user.id,
        };
        axios.post('http://127.0.0.1:8000/api/user/del',data).then(res => {
                localStorage.clear();
                history.push('/');
            }).catch(err =>{
                this.forceUpdate();
            })
    }


    if (items==null){
        return(
        <div className="wideblock">
            <div className="fakeuserimg" id="image">Image</div>
            <div className="userinfo">
                <h1 id="username">Defolt</h1>
                <i id="useremail">Defolt</i>
                <p className="usertext" id="userdetail">A few words about userA few words about uservA few words about
                    userA few words about userA few words about userA few words about userA few worA few words about
                    userA few words about userA few words about userds about userA few words about userA few words about
                    uservA few words about user</p>
            </div>

                <Link to='/settings'><button className="button">Edit</button></Link>

        </div>
        )
    }
    else{
    if (probs.delete===true){
        return (
            <div className="wideblock">
            <div className="fakeuserimg" id="image">Image</div>
            <div className="userinfo">
                <h1 id="username">{items.user.username}</h1>
                <i id="useremail">{items.user.email}</i>
                <p className="usertext" id="userdetail">{items.description}</p>
            </div>

                <button className="button" onClick={handleClick}>Delete</button>

        </div>
        )
    }
    if (probs.edit){
        return(
        <div className="wideblock">
            <div className="fakeuserimg" id="image">Image</div>
            <div className="userinfo">
                <h1 id="username">{items.user.username}</h1>
                <i id="useremail">{items.user.email}</i>
                <p className="usertext" id="userdetail">{items.description}</p>
            </div>

                <Link to='/settings'><button className="button">Edit</button></Link>

        </div>
        )
    }
    return(
        <div className="wideblock">
            <div className="fakeuserimg" id="image">Image</div>
            <div className="userinfo">
                <h1 id="username">{items.user.username}</h1>
                <i id="useremail">{items.user.email}</i>
                <p className="usertext" id="userdetail">{items.description}</p>
            </div>



        </div>
    )}

}

export default UserDetail;














