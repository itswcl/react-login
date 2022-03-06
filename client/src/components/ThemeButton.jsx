// practice useContext
import React, { useContext, useState } from 'react'
import { ThemeContext } from './Main'

const ThemeButton = () => {
    const [user, setUser] = useState("")

    const context = useContext(ThemeContext);

    return (
        <>  {
            user !== ""
                ? <p>{JSON.stringify(user)}</p>
                : null
            }
            <button theme={context} onClick={e => setUser(context)}>Click to Test</button>
        </>
    )
}

export default ThemeButton