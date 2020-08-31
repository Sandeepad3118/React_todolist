import React from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./components/todoData.js"
import "./style.css"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(id) {
    console.log("changed", id)
  }

  render() {
    const todoItems = this.state.todos.map(function (item) {
      return (
        <TodoItem
          item={item}
          handleClick={this.handleClick}
        />
      )
    })

    return <div className='todo-list'> {todoItems} </div>
  }
}

export default App
