import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
//import Blog from './Blog';
import BlogPost from './Blog';

function App() {
  return (
    <Router>
      <Route path="/" component={ BlogPost }/>
    </Router>
  );
}

export default App;
