import React from 'react'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const Form = _ => {
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
        />
        <Button variant="contained" color="primary" href="#contained-buttons">
        Submit
      </Button>
     </>
  )
}
export default Form
