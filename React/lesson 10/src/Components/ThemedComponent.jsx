import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

const ThemedComponent = () => {
   const { theme, toggleTheme } = useContext(ThemeContext)
   
   const themeClassName = theme === "light" ? "bg-light" : "bg-dark";
  return (
    <div className={themeClassName}>
        <p>The current theme is {theme}</p>
        <button onClick={toggleTheme} >Toggle Theme</button>
    </div>
  );
}

export default ThemedComponent
