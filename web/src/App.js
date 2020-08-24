import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Blog, BlogPost } from './Blog';
import Err404 from './Err404';

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          // home
          <Route exact path="/" component={ (props) => (
            <Blog timestamp={new Date().toString()} content="feed" {...props}/>
          )}/>

          // post
          <Route path="/post/:title" component={ (props) => (
            <Blog content="post" {...props}/>
          )}/>

          // search
          <Route path="/search/" component={ (props) => (
            <Blog content="feed" {...props} />
          )}/>

          // 404
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
