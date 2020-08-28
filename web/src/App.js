import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Portal from './Portal';

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ (props) => (
            <Portal timestamp={new Date().toString()} content="feed" {...props}/>
          )}/>

          <Route path="/about/" component={ (props) => (
            <Portal content="about" {...props} />
          )}/>

          <Route path="/post/:title" component={ (props) => (
            <Portal content="post" {...props}/>
          )}/>

          <Route path="/search/" component={ (props) => (
            <Portal content="feed" {...props} />
          )}/>

          <Route path="/*" component={ (props) => (
            <Portal content="err404" {...props} />
          )}/>
          <Route path='/404' component={ (props) => (
            <Portal content="err404" {...props} />
          )}/>
          <Redirect from='*' to='/404' />
        </Switch>
      </Router>
    );
  }
}

export default App;
