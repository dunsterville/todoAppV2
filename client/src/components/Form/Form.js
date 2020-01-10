import React from 'react'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TodoContext from '../../utils/TodoContext'

const Form = _ => {

  return (
    <TodoContext.Consumer>
      {
        ({ todo, handleFormSubmit, handleInputChange }) => { 
          return (
            <>
              <TextField
                id="outlined-full-width"
                label="To Do"
                style={{ margin: 8 }}
                placeholder="Ex. Fix Cabinet"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={todo}
                onChange={handleInputChange}
                name="todo"
                />
              <Button variant="contained" color="primary" href="#contained-buttons" onClick={handleFormSubmit}>Submit</Button>
            </>
          )
        }
      }
    </TodoContext.Consumer>
  )
}

export default Form
