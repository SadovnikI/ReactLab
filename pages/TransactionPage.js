import React, {Component} from "react";
import Nav from "./Nav";
import Walet from "./Walet";
import axios from "axios";


class TransactionPage extends Component {

    state = {};
    componentDidMount() {
        if (this.props.location.state){
            const { id } = this.props.location.state;
            this.id=id;
            this.forceUpdate();
            axios.get("http://127.0.0.1:8000/api/walleto/"+this.id+"/" ).then(res => {this.setState({walet:res.data})}).catch(err =>{
                this.forceUpdate();
            });
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


    onSubmit = e =>{
        console.log(1)
        e.preventDefault();
        const data = {
                sendedmoney:this.mvalue,
                sender_id: this.state.walet.id,
                receiver_id: this.sendto,
            };
        axios.post('http://127.0.0.1:8000/api/transaction/',data).then(res => {
                this.props.history.push('/');
            }).catch(err =>{
                this.flag=true;
                this.forceUpdate();

            })
    };

    render(){
        if(this.state.walet) {

            if(this.flag){
                return (<div>
                    <Nav/>

                    <div className="wideblockr"><h2>New Transfer</h2></div>
                    <div style={{width:'75%',margin:'auto',borderRadius:25}}  className="wideblockr"><h2 style={{color:"red"}} >Invalid transaction data</h2></div>
                    <div className="centered">
                        <section className="cardsT">
                            <article className="cardT">
                                <div className="fakeimg">Image</div>
                                <h2>{this.state.walet.name}</h2>
                                <h3>{this.state.walet.money} {this.state.walet.currency}</h3>
                                <p>Owner: {this.state.walet.owner.username}</p>
                            </article>
                            <form method="post" onSubmit={this.onSubmit}>
                                <article className="cardT">
                                    <div className="fakeimg">Image</div>

                                    <b><span>Send to:  </span><input style={{width:85}} type="text" className="walletid"
                                                                     placeholder="Wallet №" onChange={e => this.sendto = e.target.value}/></b>
                                    <h3><input style={{width:150 }} type="text" className="walletvalue" placeholder="3000 USD" onChange={e => this.mvalue = e.target.value}/></h3>
                                    <p className="addtext">Beware of scammers</p>
                                    <div style={{flexDirection:"column",display:"flex",alignItems:"flex-end"}} >
                                        <input style={{marginRight:25}} type="submit" name="commit" value="Go"/>
                                        </div>
                                </article>
                            </form>
                        </section>
                    </div>
                </div>
            )
            }
            return (<div>
                    <Nav/>

                    <div className="wideblockr"><h2>New Transfer</h2></div>
                    <div className="centered">
                        <section className="cardsT">
                            <article className="cardT">
                                <div className="fakeimg">Image</div>
                                <h2>{this.state.walet.name}</h2>
                                <h3>{this.state.walet.money} {this.state.walet.currency}</h3>
                                <p>Owner: {this.state.walet.owner.username}</p>
                            </article>
                            <form method="post" onSubmit={this.onSubmit}>
                                <article className="cardT">
                                    <div className="fakeimg">Image</div>
                                    <b><span>Send to:  </span><input style={{width:85}} type="text" className="walletid"
                                                                     placeholder="Wallet №" onChange={e => this.sendto = e.target.value}/></b>
                                    <h3><input style={{width:150 }} type="text" className="walletvalue" placeholder="3000 USD" onChange={e => this.mvalue = e.target.value}/></h3>
                                    <p className="addtext">Beware of scammers</p>
                                    <div style={{flexDirection:"column",display:"flex",alignItems:"flex-end"}} >
                                        <input style={{marginRight:25}} type="submit" name="commit" value="Go"/>
                                        </div>
                                </article>
                            </form>
                        </section>
                    </div>
                </div>
            )
        }
        else {
            return(<div/>)
        }

    }
}

export default TransactionPage;
