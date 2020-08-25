import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Blog from './Blog';

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ (props) => (
            <Blog timestamp={new Date().toString()} content="feed" {...props}/>
          )}/>

          <Route path="/post/:title" component={ (props) => (
            <Blog content="post" {...props}/>
          )}/>

          <Route path="/search/" component={ (props) => (
            <Blog content="feed" {...props} />
          )}/>

          <Route path="/*" component={ (props) => (
            <Blog content="err404" {...props} />
          )}/>
          <Route path='/404' component={ (props) => (
            <Blog content="err404" {...props} />
          )}/>
          <Redirect from='*' to='/404' />
        </Switch>
      </Router>
    );
  }
}

export default App;
