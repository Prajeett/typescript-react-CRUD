import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever, MdOutlineDoneOutline } from "react-icons/md";
import { Todo } from "./model";
import "./styles.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    const handleDone = (id:number)=>{
        setTodos(todos.map((todo) => todo.id === id ? {...todo,isDone : !todo.isDone} : todo))
    }
  return (
    <form className="todos_single">
        {todo.isDone ? (
              <s className="todos_single--text">{todo.todo}</s>
        ) : (      <span className="todos_single--text">{todo.todo}</span>)}


      <div>
        <span className="icon">
          <FaEdit />
        </span>
        <span className="icon">
          <MdDeleteForever />{" "}
        </span>
        <span className="icon" onClick={() => {
            handleDone(todo.id);
        }}>
          <MdOutlineDoneOutline />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
