import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route,  Switch } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Post from './Components/Post'
class App extends Component{
  render() {
    return (
      <BrowserRouter>
       <div className="App">
        <Navbar/>
        <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
      <Route path="/:post_id" component={Post}/>  {/* this is a router parameter */}
      </Switch>
       </div>
      </BrowserRouter>
      
    );
  }
  }


export default App;
