import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import Navbar from '../Navbar';
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
    width: "100%",
    display: "flex",
    "justify-content": "center",
    "margin-left": "auto",
    "margin-right": "auto",
    "flex-wrap": "wrap",
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
          <MarkDown filepath={this.props.location.pathname}/>
        </div>
        <div className={classes.spacer2}> </div>
      </div>
    );
  }
}

export default withStyles(styles)(BlogPost);
