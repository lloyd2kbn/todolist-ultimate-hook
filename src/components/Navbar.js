import React,{useContext} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";
import {AuthContext} from "../contexts/AuthContext";
import { TOGGLE_AUTH } from '../reducers/type';
function Navbar() {
  const {theme}=useContext(ThemeContext);
  const {isLightTheme,light,dark}=theme;
  const style=isLightTheme?light:dark;
  // context
  const {isAuthenticated,dispatch}=useContext(AuthContext);
  console.log('navbar')
  return (
    <div className='navbar' style={style}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>
              {
                isAuthenticated?"You are Loggin":""
              }
              <button onClick={()=>{
                 dispatch({
                  type:TOGGLE_AUTH
                })
              }}
              >{isAuthenticated?"Logout":"Login"}</button>
            </li>
        </ul>
    </div>
  )
}

export default Navbar