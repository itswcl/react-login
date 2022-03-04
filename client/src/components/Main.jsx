import React, { useState } from 'react'
import Login from './Login';

const Main = () => {
    const [currentUser, setCurrentUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
    })

    const [error, setError] = useState("");

    const admin = {
        firstName: "test",
        lastName: "test",
        email: "test@gmail.com",
        password: "password"
    }

    const login = (detail) => {
        // console.log(detail)

        if (detail.email === admin.email && detail.password === admin.password) {
            setCurrentUser({
                ...currentUser,
                firstName: admin.firstName,
                email: admin.email
            })
            console.log("login success")
        } else {
            setError("login failed")
        }
    }

    const logout = () => {
        setCurrentUser({
            ...currentUser,
            firstName: "",
            email: ""
        })
    }

    return (
        <>
            {(currentUser.email !== "") ? (
                <div>
                    <h1>Welcome, <span>{currentUser.firstName}</span></h1>
                    <button className='btn btn-success' onClick={logout}>Logout</button>
                </div>
            ) : (
                <Login login={login} error={error} />
            )}
        </>
    )
}

export default Main