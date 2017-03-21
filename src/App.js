import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';


class App extends Component {
  render() {
    return (
            <div>
        <nav className="navbar navbar-inverse navbar-static-top">
              <a className="navbar-brand" href="#">CarSeller</a>
              <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="carpost">Submit a Car</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
        </nav>
        {this.props.children}
        <nav className="navbar navbar-default navbar-static-bottom">
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><h4>Copyright 2017</h4></li>
                <li><Link to="/contact">Contact</Link></li>

              </ul>
            </div>
        
        </nav>
        
      </div>
        
       
    );
  }
}

export default App;
