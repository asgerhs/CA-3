import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import './style/App.css';
import Welcome from './Welcome';
import LoginBox from './LoginBox';
//import URLSettings from './settings'

function App() {


  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/"> <Welcome /> </Route>
          <Route path="/login"> <LoginBox /> </Route>
          <Route path="/products"> <Products /> </Route>
          <Route path="/about"> <About /> </Route>
          <Route path="*"> <NoMatch /> </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}
//<li>{URLSettings.getLink("Home")}</li>
const Header = () => {
  return (
    <ul className="header">
      
      <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
      <li><NavLink activeClassName="active" to="/login">Login</NavLink></li>
      <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
      <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
    </ul>
  )
}

const Footer = () => {
  return (
    <footer>
      <div className="d-flex justify-content-center align-items-center">
        <span className> © Copyright 2019 - Martin Frederiksen, Andreas Vikke, Emil Svensmark, Asger Sørensen, & William Huusfeldt. </span>
      </div>
    </footer>
  )
}

const Products = () => <div>Products</div>

const About = () => <div>About</div>

const NoMatch = () => <div>No match!</div>

export default App;
