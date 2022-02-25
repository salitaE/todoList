import React, {useState} from 'react';
import './App.css';
import Todotable from './components/Todolist';

function App () {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const[todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }
  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

   return(
     <div className= "App">
       <header className="App-header">
         <h1>Simple To do list</h1>
       </header>

       <form onSubmit={addTodo}>
         <h3 style={{ textAlign: "left", paddingLeft: "10px" }}>Add to do: </h3>
         <div className="wrapper tHead">
           <label>Description </label>
           <input type="text" name= "desc" value={todo.desc} onChange={inputChanged} />
           <label>Date </label>
           <input type="date" name= "date" value={todo.date} onChange={inputChanged} /> 
           <input type="submit" value="Add" />
         </div>
        </form>
        <Todotable todos={todos} />
     </div>
   )
  

}

export default App;
