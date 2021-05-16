import React from 'react'
import Nav from "./Nav";

import UserCard from "./UserCard";

function UserList() {
    return(
        <div>
            <Nav/>
            <div className="wideblockl"><h2>List of Admin users</h2></div>
            <UserCard url= {'http://127.0.0.1:8000/api/superuser'} />
            <div className="wideblockl"><h2>List of Regular users</h2></div>
            <UserCard url= {'http://127.0.0.1:8000/api/user'} />
        </div>
    )

}

export default UserList;