import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import BlogPost from './BlogPost';

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
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>
    );
  }
}

export default withStyles(styles)(BlogFeed);
