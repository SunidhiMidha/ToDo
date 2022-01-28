import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './components/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import About from './components/pages/About'
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';

class App extends Component{

  render(){
    return (
      <Provider store = {store}>
        <Router>
          <div className="App">
            <div className='container'>
              <Layout/>
              <Routes>
                <Route exact path="/" element = {<div> <AddTodo/> <TodoItem/> </div>}/>
                <Route path ="/about" element = {<About/>} />
              </Routes>
            </div>
          </div>
          </Router>
      </Provider>
    )
  }
}

export default App;
