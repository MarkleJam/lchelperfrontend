import React, { Component } from 'react';
import {Container} from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import './App.css';
import Table from './components/Table.jsx';
import ModelForm from './components/Modal.jsx'
import JSON from 'JSON';
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

