import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';




const App: React.FC = () => {


const [todo, setTodo] = useState <string>("");

const [todos, setTodos] = useState <Todo[]>([])


const handleAdd = (e:React.FormEvent) => {
  e.preventDefault();
}




  return (
    <div className="App">
      <span className='heading'>CURD app</span>
      <InputField todo={todo} setTodo = {setTodo} handleAdd = {handleAdd}/>
    </div>
  );
}

export default App;



