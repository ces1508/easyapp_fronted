import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import AppRouter from './views/apps/router'

class App extends Component {

  render() {
    return (
    <Router>
      <div>
        <Route path = '/apps' component = { AppRouter } />
      </div>
    </Router>
    )
  }
}

export default App;
