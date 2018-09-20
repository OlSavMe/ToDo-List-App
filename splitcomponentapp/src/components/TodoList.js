import React, {Component} from 'react';
import '../App.css';


class TodoList extends Component {
    render() {
     
            return (
             
        <table className='table'>
        <tbody>
         <tr><th>Date</th><th>Task</th></tr>
         {this.props.data.map((todo, index) =>
        <tr key={index}>
        <td>{todo.date}</td>
        <td>{todo.task}</td>
        <td><button id={index} onClick={this.props.deleteItem}>Delete</button></td>
        </tr>)}
        </tbody>
      </table>);

    
}
}
export default TodoList;