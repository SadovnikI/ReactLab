import React, {useEffect,useState} from 'react'



function WaletCard(probs) {

    useEffect(() =>{
        fetchdata();
        },[]);

    const [items,setItems] = useState([]);

    const fetchdata = async() =>{
        const data = await fetch(probs.url).then(response => response.json());
        setItems(data);
    };


    return(
        <section className="cards" id="walletlist" >
            {items.map(item => (
            <article className="card" key={item.name}>
                <div className="fakeimg">Image</div>
                <h2>{item.name}</h2>
                <h3>{item.money} {item.currency}</h3>
                <p>Owner: {item.owner.username}</p>
                <button className="button">Go</button>
            </article>
                ))}
        </section>
    )

}

export default WaletCard;