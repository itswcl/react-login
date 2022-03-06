// practice useContext
import React from 'react'
import ThemeButton from './ThemeButton'

const Toolbar = () => {
    return (
        <div>
            {/* since we have context provider we dont need props anymore */}
            <ThemeButton/>
            {/* <ThemeButton theme={props.theme} /> */}
        </div>
    )
}

export default Toolbar