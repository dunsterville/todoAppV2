import React from 'react'
import Todo from './pages/Todo'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Todo />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
