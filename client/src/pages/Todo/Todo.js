import React, { Component }  from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import TodoContext from '../../utils/TodoContext'
import axios from 'axios'

class Todo extends Component {

  state = {
    todo: '',
    todoDisplay: [],
    handleInputChange: e => {
      this.setState({ [e.target.name]: e.target.value})
    },
    handleFormSubmit: e => {
      e.preventDefault()
      // Post to database
      axios.post(`/`)
        .then(({ data }) => {
          console.log(data)
          // Push todo to display array
          let todoDisplay = JSON.parse(JSON.stringify(this.state.todoDisplay))
          todoDisplay.push(this.state.todo)
          // Set state
          this.setState({  
            todoDisplay,
            todo: ''
           })
        })
        .catch(err => console.error(err))
    }
  }

  render () {
    return (
      <TodoContext.Provider value={this.state}>
        <CssBaseline />
        <Container>
          <h1>Hello World</h1>
        </Container>
      </TodoContext.Provider>
    )
  }
}

export default Todo