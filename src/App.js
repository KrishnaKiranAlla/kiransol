import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import Footer from './Footer.js';
import Login from './Login';
import Signup from './Signup';
import Contact from './Contact';
import About from './About';
import Nav2 from './Nav2';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
const Home=()=>{
  return(
    <div>
      <Nav/>
      <Footer/>
        </div>
  )
};
const Login1=()=>{
  return(
    <div>
      <Nav2/>
      <Login/>
      </div>
  )
};
const Signup1=()=>{
  return(
    <div>
      <Nav2/>
      <Signup/>
    </div>
  )
};
const About1=()=>{
  return(
    <div>
      <Nav2/>
      <About/>
    </div>
  )
};
const Contact1=()=>{
  return(
    <div>
      <Nav2/>
      <Contact/>
    </div>
  )
};
class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={Home}/>
                 <Route exact path="/about" component={About1}/>
                 <Route exact path="/login2" component={Login1}/>
                 <Route exact path="/signup2" component={Signup1}/>
                 <Route exact path="/about2" component={About1}/>
                 <Route exact path="/contact2" component={Contact1}/>
        </div>
        </Router>
    );
  }
}

export default App;
