import React, {useEffect,useState} from 'react'

import {Link} from "react-router-dom";


function UserCard(probs) {

    useEffect(() =>{
        fetchdata();
        },[]);

    const [items,setItems] = useState([]);

    const fetchdata = async() =>{
        const data = await fetch(probs.url).then(response => response.json());
        setItems(data);
    };



    return(
        <div>
            <section className="cardsl">
                {items.map(item => (
                    <article className="cardl" key={item.user.id}>
                    <div className="fakeimg">Image</div>
                    <b>{item.user.username}</b>
                    <i>{item.user.email}</i>
                    <p className="userwalets">Wallets : {item.walets}</p>
                    <p className="usertext">{item.description}</p>
                        <Link to={{pathname: '/cabinet', state: {id:item.user.id}}} style={{textDecoration: 0}}><button className="button">Go</button></Link>
                </article>
                ))}

            </section>
        </div>

)
}

export default UserCard;