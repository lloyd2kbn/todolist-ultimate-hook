import React,{useState,useContext} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {ThemeContext} from '../contexts/ThemeContext';
import {TodoContext} from '../contexts/TodoContext';
import {ADD_TODO} from '../reducers/type'
function TodoForm() {
  const [title,setTitle]=useState('');
  // context
  const {theme}=useContext(ThemeContext);
   const {isLightTheme,light,dark}=theme;
   const style=isLightTheme?light:dark;
  const onTitleChange=(event)=>{
          setTitle(event.target.value)
  }

  // todo context
  const {dispatch}=useContext(TodoContext);

  const handleSubmit=(event)=>{
    event.preventDefault();
    dispatch({
      type:ADD_TODO,
      payload:{
        todo:{
          id:uuidv4(),
          title
        }
      }
    });
    setTitle('')
}
  return (
    <form onSubmit={handleSubmit}>
            <input type="text"  placeholder='Enter a new todo....' value={title} onChange={onTitleChange} required/>
            <input type="submit" value='Add' style={style} />
    </form>
  )
}

export default TodoForm