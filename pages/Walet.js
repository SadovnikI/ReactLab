import React, { Component } from 'react'
import Nav from "./Nav";
import axios from "axios";
import Transactions from "./Transactions";
import {Link} from "react-router-dom";


class Walet extends Component {

    state = {};

    componentDidMount() {
            const {id} = this.props.location.state;
            this.id = id;
            this.forceUpdate();
            axios.get("http://127.0.0.1:8000/api/walleto/" + this.id + "/").then(res => {
                this.setState({walet: res.data})
            }).catch(err => {
                this.forceUpdate();
            });
            const config = {
                headers: {
                    Authorization: 'Token ' + localStorage.getItem('token')
                }
            };
            console.log(config)
            axios.get('http://127.0.0.1:8000/api/auth/user', config).then(res => {
                this.setState({user: res.data})
            }).catch(err => {
                this.forceUpdate();
            })

    }


    render() {
        if (this.state.walet && this.state.user ) {
            if (this.state.walet.owner.id === this.state.user.id) {

                return (

                    <div>
                        <Nav/>
                        <div class="centered">
                            <section class="cardsWl">
                                <article class="cardWl">
                                    <div class="fakeimgWl">Image</div>
                                    <h2>{this.state.walet.name}</h2>
                                    <h3>{this.state.walet.money} {this.state.walet.currency} </h3>
                                    <p>Owner: {this.state.walet.owner.username}</p>
                                    <br/><br/><br/>
                                    <hr class="solid"/>
                                    <h4>Transfers</h4>
                                    <hr class="solid"/>

                                    <div class="transconteiner">
                                        <Transactions
                                            url={'http://127.0.0.1:8000/api/transaction/' + this.state.walet.id + '/'}/>
                                    </div>
                                    <br class="bottom"/>
                                    <Link to={{pathname: '/transaction', state: {id: this.state.walet.id}}}
                                          style={{textDecoration: 0}}>
                                        <button class="button">New Transfer</button>
                                    </Link>
                                </article>
                            </section>
                        </div>
                    </div>)
            } else {
                return (

                    <div>
                        <Nav/>
                        <div class="centered">
                            <section class="cardsWl">
                                <article class="cardWl">
                                    <div class="fakeimgWl">Image</div>
                                    <h2>{this.state.walet.name}</h2>
                                    <h3>{this.state.walet.money} {this.state.walet.currency} </h3>
                                    <p>Owner: {this.state.walet.owner.username}</p>
                                    <br/><br/><br/>
                                    <hr class="solid"/>
                                    <h4>Transfers</h4>
                                    <hr class="solid"/>

                                    <div class="transconteiner">
                                        <Transactions
                                            url={'http://127.0.0.1:8000/api/transaction/' + this.state.walet.id + '/'}/>
                                    </div>
                                    <br class="bottom"/>
                                </article>
                            </section>
                        </div>
                    </div>)
            }
        } else {
            return (<div/>)
        }


    }
}

export default Walet;