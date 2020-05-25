import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import './App.css';
import Home from './components/Pages/Home.jsx';
import History from './components/HistoryPage/History.jsx'
import SearchResult from './components/Pages/SearchResult.jsx';

class App extends Component {

  render() {
    return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/history/:id' component={History}/>
        <Route exact path='/item/search' component={SearchResult}/>
      </Switch>
    </Router>
    )
  }
}

export default App;

