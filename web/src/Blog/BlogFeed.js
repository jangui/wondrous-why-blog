import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import BlogPostFeed from './BlogPostFeed';

const styles = theme => ({
  feed: {
    display: "flex",
    height: "100%",
    width: "100%",
    "flex-direction": "column",
    "align-items": "center",
    background: "#1f2131",
  },
});

class BlogFeed extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.feed}>
        <BlogPostFeed />
        <BlogPostFeed />
        <BlogPostFeed />
        <BlogPostFeed />
        <BlogPostFeed />
        <BlogPostFeed />
        <BlogPostFeed />
      </div>
    );
  }
}

export default withStyles(styles)(BlogFeed);
