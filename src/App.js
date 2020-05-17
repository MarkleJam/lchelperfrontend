import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import './App.css';
import Home from './components/Pages/Home.jsx';

class App extends Component {

  render() {
    return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/add' component={Home}/>
      </Switch>
    </Router>
    )
  }
}

export default App;

