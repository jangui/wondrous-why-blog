import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import Navbar from './Navbar';
import MarkDown from './MarkDown';

const styles = theme => ({
  main: {
    height: "100%",
    width: "100%",
    background: "#1f2131",
  },
  spacer: {
    height: "75px",
  },
  spacer2: {
    height: "30px",
  },
  post: {
    height: "100%",
    width: "80%",
    "margin-left": "100px",
  },
});

class BlogPost extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <Navbar />
        <div className={classes.spacer}> </div>
        <div className={classes.post}>
          <MarkDown />
        </div>
        <div className={classes.spacer2}> </div>
      </div>
    );
  }
}

export default withStyles(styles)(BlogPost);
