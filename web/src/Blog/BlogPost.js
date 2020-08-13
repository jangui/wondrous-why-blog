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
    background: "#1f2131",
  },
  spacer2: {
    height: "30px",
    background: "#1f2131",
  },
  post: {
    position: "relative",
    left: "100px",
    display: "flex",
    height: "100%",
    width: "100%",
    "flex-direction": "column",
    "align-items": "center",
    "margin-left": "50px",
    "margin-right": "30px",
    background: "#1f2131",
  },
});

class BlogPost extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <Navbar />
        <div className={classes.spacer}> </div>
        <MarkDown className={classes.post} />
        <div className={classes.spacer2}> </div>
      </div>
    );
  }
}

export default withStyles(styles)(BlogPost);
