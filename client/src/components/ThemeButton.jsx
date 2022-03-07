// practice useContext
import React, { useContext, useState } from 'react'
import { ThemeContext, themes } from '../Context/ThemeContext'

const ThemeButton = () => {
    // const {theme, setTheme} = useContext(ThemeContext)

    // pass from App.js themeContext.provider
    const { theme, setTheme } = useContext(ThemeContext);

    const themeUpdate = () => {
        // compared what the default is
        theme.color === "black"
            // update to opposite based on click
            ? setTheme(themes.dark)
            : setTheme(themes.light)
    }

    return (
        <>
            <button onClick={themeUpdate}>Change Theme</button>
        </>
    )
}

export default ThemeButton