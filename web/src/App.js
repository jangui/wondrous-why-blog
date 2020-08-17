import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Blog, BlogPost } from './Blog';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ Blog }/>
      <Route path="/post/:title" component={ BlogPost }/>
    </Router>
  );
}

export default App;
