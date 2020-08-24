import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Blog, BlogPost } from './Blog';
import Err404 from './Err404';

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ (props) => (
            <Blog timestamp={new Date().toString()} {...props}/>
          )}/>
          <Route path="/post/:title" component={ BlogPost } />
          <Route path="/search/" component={ Blog } />
          <Route path="/*" component={ Err404 } />
          <Route path='/404' component={ Err404 } />
          <Redirect from='*' to='/404' />
        </Switch>
      </Router>
    );
  }
}

export default App;
