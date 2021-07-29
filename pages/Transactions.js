import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";



function Transactions(probs) {

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
            {
                items.map(item => (
                    <div>
                    <div className="transfer">
                        <label>Sender: <b>{item.sender_id}</b></label><label>Receiver: <b>{item.receiver_id}</b></label><label>Money: <b>{item.sendedmoney} USD</b></label>
                    </div>
                    <hr className="solidsmall"/>
                    </div>
                ))
            }
            </div>
        )

}

export default Transactions;