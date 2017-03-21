import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './index.css';
import Home from './Home';
import CarPost from './CarPost';
import Contact from './Contact';
import About from './About';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/CarPost" component={CarPost}/>
    <Route path="/About" component={About}/>
    <Route path="/Contact" component={Contact}/>

    </Route>
  </Router>,
  document.getElementById('root')
);
