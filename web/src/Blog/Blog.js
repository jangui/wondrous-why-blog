import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import Navbar from '../Navbar';
import BlogFeed from './BlogFeed';

const styles = theme => ({
  main: {
    height: "100%",
    width: "100%",
    background: "#1f2131",
  },
  spacer: {
    height: "100px",
    background: "#1f2131",
  },

});

class Blog extends Component {
  render() {
    const { classes } = this.props;
    if (this.props.location.pathname === '/') {
      return (
        <div className={classes.main}>
          <Navbar />
          <div className={classes.spacer}></div>
          <BlogFeed search=''/>
        </div>
      );
    } else {
      const search = this.props.location.pathname.split('/search/')[1]
      return (
        <div className={classes.main}>
          <Navbar />
          <div className={classes.spacer}></div>
          <BlogFeed search={search}/>
        </div>
      );
    }
  }
}

export default withStyles(styles)(Blog);
