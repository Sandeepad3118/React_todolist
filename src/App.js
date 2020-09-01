import React from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./components/todoData.js"
import "./style.css"



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData,
      count: 0,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleClick(id) {
    console.log("changed", id)
  }
  handleChange() {
    this.setState(function(prevState){
      return{
        count:prevState.count + 1
      }
    }
    )
  }
 
  

  render() {
    const todoItems = this.state.todos.map(function (item) {
      return <TodoItem item={item} /* handleClick={this.handleClick} */ />
    })

    return (
      <div className='todo-list'>
        {todoItems}



        <div className="cnter">{this.state.count}</div>
        <button onClick={this.handleChange} className="button1">Click here</button>
      </div>
    )
  }
}

export default App
