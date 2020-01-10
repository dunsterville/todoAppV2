import { createContext } from 'react'

const TodoContext = createContext({
  todo: '',
  todoDisplay: [],
  handleInputChange: () => {},
  handleFormSubmit: () => {}
})

export default TodoContext