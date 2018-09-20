import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {task: '', date: '', todos: []}
  }

  inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }


  addTodo = (event) => {
    event.preventDefault();
    const todoItems = {task: this.state.task, date: this.state.date};
    this.setState({
      todos: [...this.state.todos, todoItems]
    });
  }

  deleteTask = (event) => {
    const index = parseInt(event.target.id);
    this.setState({todos: this.state.todos.filter((todo, i) => i !== index),
    })
    

}

  render() {
    
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Todolist</h2>
        </div>
        <div>
        <form onSubmit={this.addTodo}>
            <fieldset>
            <legend>Add todo:</legend>
            Task: <input type="text" name="task" placeholder="your task..." onChange={this.inputChanged} value={this.state.task}/>
            Date: <input type="date"  name="date" onChange={this.inputChanged} value={this.state.date}/>
            <input type="submit" value="Add"/>
            </fieldset>
          </form>
        </div>
        <div className='App'>
        <TodoList data={this.state.todos} deleteItem={this.deleteTask}/>  
        </div>          
      </div> 
  

    );
  }
}

export default App;

