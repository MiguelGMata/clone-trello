import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './components/Routes';
//import Footer from './components/organisms/Footer/Footer';

require('./App.scss');


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes />
        </div>
      </Router>
    )
  }
}

export default App

