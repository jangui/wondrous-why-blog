import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


const styles = theme => ({
  main: {
    'width': '100%',
    'height': '100%',
    background: "#1f2131",
    "text-align": "center",
    },
  spacer: {
    height: "20px",
    background: "#1f2131",
  },
  "err": {
    "color": "pink",
    "font-size": "32px",
    "text-decoration": "none",
    "&:hover": {
      "color": "purple",
      "cursor": "pointer",
    },
  },
});

class Err404 extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <Navbar />
        <div className={classes.spacer}></div>
        <Link className={classes.err} to='/'>404 Page Not Found</Link>
      </div>
    );
  }
}

export default withStyles(styles)(Err404);
