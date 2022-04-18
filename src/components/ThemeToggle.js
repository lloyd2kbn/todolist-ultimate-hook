import React,{useContext}from 'react';
import {ThemeContext} from '../contexts/ThemeContext'

function ThemeToggle() {
    const {toggleTheme}=useContext(ThemeContext);

  return (
    <button className='toggle-btn' onClick={toggleTheme}>Toggle-Theme</button>
  )
}

export default ThemeToggle