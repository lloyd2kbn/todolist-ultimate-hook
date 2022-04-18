import React,{createContext,useState,useEffect, useReducer} from 'react';
import { todoReducer } from '../reducers/TodoReducer';
import {GET_TODOS,SAVE_TODOS} from '../reducers/type'
export const TodoContext=createContext();
function TodoContextProvider({children}) {
    // const [todos,setTodos]=useState(
    //  []
    // );
    // console.log("context todo")
  const [todos,dispatch]=useReducer(todoReducer,[])
      //getting Todo
      useEffect(()=>{
          dispatch({
            type:GET_TODOS,
            payload:null
          })
},[])

  // useEffect
    useEffect(()=>{
      dispatch({
        type:SAVE_TODOS,
        payload:{
          todos:todos
        }
      })
  },[todos])
//     const addTodo=todo=> setTodos([...todos,todo]);
//     const deleteTodo=id=>{
//         const newsTodo=todos.filter((item,index)=>{
//                     return item.id!==id
//         })
//         setTodos(newsTodo)
//     }
    const todoContextData={
        todos,
        dispatch

    }
  return (
    <TodoContext.Provider value={todoContextData}>{children}</TodoContext.Provider>
  )
}

export default TodoContextProvider