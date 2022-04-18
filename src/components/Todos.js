import React ,{useState,useContext} from 'react'
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import {TodoContext} from '../contexts/TodoContext'
import {AuthContext} from "../contexts/AuthContext";

function Todos() {
const {todos}=useContext(TodoContext);
const {isAuthenticated,toggleAuth}=useContext(AuthContext);
console.log("render todos")
  return (
    <div className="todo-list">
        <TodoForm />
        {
          isAuthenticated?
          <ul>
          {
              todos.map((todo,index)=><TodoItem todo={todo} key={index} />)
          }
        </ul>:
        "Bạn chưa đăng nhập"
        }
     
    </div>
  )
}

export default Todos