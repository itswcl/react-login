import React, { useState, useContext } from 'react'
import Login from './Login';
import axios from 'axios'
import Toolbar from './Toolbar';
// we dont need ThemeContext if we being pass from parent
// import { ThemeContext } from '../Context/ThemeContext'

const admin = {
    firstName: "test",
    lastName: "test",
    email: "test@gmail.com",
    password: "password"
}

// we dont need ThemeContext if we being pass from parent
// declare ThemeContext by create context 03052022

const Main = () => {
    const [currentUser, setCurrentUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
    })
    const [error, setError] = useState("");

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
                <>
                    <Login login={login} error={error} />
                    {/* we dont need ThemeContext if we being pass from parent */}
                    {/* practice useContext 03052022 */}
                    {/* provider to pass current theme */}
                    {/* any component can read */}
                    {/* dark as default */}
                    {/* this is props way */}
                    {/* <Toolbar theme="dark" /> */}
                    {/* <ThemeContext.Provider value={{ admin, setTheme, theme }}> */}
                    <Toolbar />
                    {/* </ThemeContext.Provider> */}
                </>
            )}
        </>
    )
}

export default Main