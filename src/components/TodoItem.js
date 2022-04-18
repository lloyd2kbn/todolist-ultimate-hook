import React ,{useContext}from 'react'
import {ThemeContext} from "../contexts/ThemeContext";
import {TodoContext} from '../contexts/TodoContext'
import {DELETE_TODO} from '../reducers/type'
function TodoItem({todo}) {
  const {theme}=useContext(ThemeContext);
  const {isLightTheme,light,dark}=theme;
  const style=isLightTheme?light:dark;

  // Todo Context
  const {dispatch}=useContext(TodoContext);
  return (
    <li style={style} onClick={()=>{
            dispatch({
              type:DELETE_TODO
              ,
              payload:{
                id:todo.id
              }
            })
    }}>{todo.title}</li>
  )
}

export default TodoItem