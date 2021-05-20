import ReactDOM from 'react-dom'
import Nav from "../Nav";
import App from "../../App";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import LoginPage from "../LoginPage";
import ProfileSettings from "../ProfileSettings";
import RegistrationPage from "../RegisterPage";
import TransactionPage from "../TransactionPage";
import Transactions from "../Transactions";
import UserCabinet from "../UserCabinet";
import UserCard from "../UserCard";
import UserDetail from "../UserDetail";
import UserList from "../UserList";
import UserUpdate from "../UserUpdate";
import Walet from "../Walet";
import WaletCard from "../WaletCard";
import WaletsPage from "../WaletsPage";
import {render,screen,fireEvent,getByTestId} from "@testing-library/react";


//Nav
it("Nav renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><Nav/></Router>,div);
});

it("Nav renders without crashes (pass user)",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><Nav user={{
  id : 2,
  username: "123",
  email: "defolt@f.com"}}
/>
    </Router>,div);
});

//Login
it("Login renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><LoginPage/></Router>,div);
});

it('Login renders without crashes on submit',()=>{
    render(<Router><LoginPage /></Router>);
    const  input1 = screen.getByPlaceholderText('Username');
    const  input2 = screen.getByPlaceholderText('Password');
    const  input3 = screen.getByTestId('submit');
    fireEvent.change(input1, { target: { value: '123' }});
    fireEvent.change(input2, { target: { value: '123' }});
    fireEvent.change(input3, { target: { value: '123' }});
    fireEvent(
    screen.getByTestId('submit'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })
    )
});

it('Login renders without crashes on submit flag',()=>{
    render(<Router><LoginPage flag={true}/></Router>);
    const  input1 = screen.getByPlaceholderText('Username');
    const  input2 = screen.getByPlaceholderText('Password');
    const  input3 = screen.getByTestId('submit');
    fireEvent.change(input1, { target: { value: '123' }});
    fireEvent.change(input2, { target: { value: '123' }});
    fireEvent.change(input3, { target: { value: '123' }});
    fireEvent(
    screen.getByTestId('submit'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })
    )
});


it("ProfileSettings renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><ProfileSettings/></Router>,div);
});

//Register

it("RegistrationPage renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><RegistrationPage/></Router>,div);
});

it('RegistrationPage renders without crashes on submit',()=>{
    render(<Router><RegistrationPage /></Router>);
    const  input1 = screen.getByPlaceholderText('Password');
    const  input2 = screen.getByPlaceholderText('Confirm Password');
    const  input3 = screen.getByPlaceholderText('Username');
    const  input4 = screen.getByTestId('role1');
    const  input5 = screen.getByTestId('role2');
    fireEvent.change(input1, { target: { value: '123' }});
    fireEvent.change(input2, { target: { value: '123' }});
    fireEvent.change(input3, { target: { value: '123' }});
    fireEvent.change(input4, { target: { value: 'second' }});
    fireEvent.change(input5, { target: { value: 'second' }});
    fireEvent(
    screen.getByTestId('submit'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })
    )
});

it('RegistrationPage renders without crashes on submit with flag',()=>{
    render(<Router><RegistrationPage flag={true} /></Router>);
    const  input1 = screen.getByPlaceholderText('Password');
    const  input2 = screen.getByPlaceholderText('Confirm Password');
    const  input3 = screen.getByPlaceholderText('Username');
    const  input4 = screen.getByTestId('role1');
    const  input5 = screen.getByTestId('role2');
    fireEvent.change(input1, { target: { value: '123' }});
    fireEvent.change(input2, { target: { value: '123' }});
    fireEvent.change(input3, { target: { value: '123' }});
    fireEvent.change(input4, { target: { value: 'true' }});
    fireEvent.change(input5, { target: { value: 'false' }});
    fireEvent(
    screen.getByTestId('submit'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })
    )
});

//TransactionPage

it("TransactionPage renders without crashes with state",()=>{

    render(<Router><TransactionPage state= {1}/></Router>)
    fireEvent(
    screen.getByTestId('submit'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })
    )
});
it("TransactionPage renders without crashes with state",()=>{

    render(<Router><TransactionPage /></Router>)
    fireEvent(
    screen.getByTestId('submit'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })
    )
});

it("TransactionPage renders without crashes with state and flag",()=>{

    render(<Router><TransactionPage flag={true} /></Router>)
    fireEvent(
    screen.getByTestId('submit'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })
    )
});

//Transactions
it("Transactions renders without crashes",()=>{
    render(<Router><Transactions/></Router>)
});

//UserCabinet
it("UserCabinet renders without crashes",()=>{
    render(<Router><UserCabinet state={1} /></Router>);
});

it("UserCabinet renders without crashes",()=>{
    render(<Router><UserCabinet  /></Router>);
});


it("UserCard renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><UserCard/></Router>,div);
});
//UserDetail
it("UserDetail renders without crashes",()=>{
    render(<Router><UserDetail/></Router>);
});

it("UserDetail renders without crashes",()=>{
    render(<Router><UserDetail delete={true}/></Router>);
});

it("UserDetail renders without crashes",()=>{
    render(<Router><UserDetail edit={1}/></Router>);
});
it("UserDetail renders without crashes",()=>{
    render(<Router><UserDetail delete={true}/></Router>);
        fireEvent(
    screen.getByTestId('submit'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })
    )
});

it("UserList renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><UserList/></Router>,div);
});
it("UserUpdate renders without crashes",()=>{
    render(<Router><UserUpdate flag={true}/></Router>);
    const  input1 = screen.getByTestId('Username');
    const  input2 = screen.getByTestId('Email');
    const  input3 = screen.getByTestId('Description');
    const  input4 = screen.getByTestId('Password1');
    const  input5 = screen.getByTestId('Password2');
    fireEvent.change(input1, { target: { value: '123' }});
    fireEvent.change(input2, { target: { value: '123' }});
    fireEvent.change(input3, { target: { value: '123' }});
    fireEvent.change(input4, { target: { value: '123' }});
    fireEvent.change(input5, { target: { value: '123' }});
    fireEvent(
    screen.getByTestId('Button'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })
    )
});
it("UserUpdate renders without crashes",()=>{

    render(<Router><UserUpdate flag={false}/></Router>);
    const  input1 = screen.getByTestId('Username');
    const  input2 = screen.getByTestId('Email');
    const  input3 = screen.getByTestId('Description');
    const  input4 = screen.getByTestId('Password1');
    const  input5 = screen.getByTestId('Password2');
    fireEvent.change(input1, { target: { value: '123' }});
    fireEvent.change(input2, { target: { value: '123' }});
    fireEvent.change(input3, { target: { value: '123' }});
    fireEvent.change(input4, { target: { value: '123' }});
    fireEvent.change(input5, { target: { value: '123' }});
    fireEvent(
    screen.getByTestId('Button'),
    new MouseEvent('click', {
        bubbles: true,
    cancelable: true,
    })
    )
});
it("Walet renders without crashes",()=>{

    render(<Router><Walet state={{id:1}} /></Router>);

});
it("Walet renders without crashes",()=>{

    render(<Router><Walet state={{id:2}} /></Router>);

});
it("WaletCard renders without crashes",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Router><WaletCard/></Router>,div);
});

it ('Test App',()=>{
    render(<App/>);
});


it("WaletsPage renders without crashes",()=>{
     render(<Router><WaletsPage state={1}/></Router>);
 });

it("WaletsPage renders without crashes",()=>{
     render(<Router><WaletsPage /></Router>);
 });
