import React, { useState } from 'react'
import Login from './Login';

const Main = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
    })

    const [error, setError] = useState("");

    return (
        <>
            {(user.email !== "") ? (
                <div>
                    <h1>Welcome, <span>{user.firstName}</span></h1>
                    <button className='btn btn-success'>Logout</button>
                </div>
            ) : (
                <Login />
            )}
        </>
    )
}

export default Main