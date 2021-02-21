import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './components/Routes';
import { DragDropContext } from 'react-beautiful-dnd';

require('./App.scss');


class App extends Component {
  render() {
    return (
      <Router className="App">
        <DragDropContext>
          <Routes />
        </DragDropContext>
      </Router>
    )
  }
}
export default App

