import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Blog from './Blog';

function App() {
  return (
    <Router>
      <Route path="/" component={ Blog }/>
    </Router>
  );
}

export default App;
