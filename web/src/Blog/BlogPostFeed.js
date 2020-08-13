import React from 'react';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

const styles = theme => ({
  post: {
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
  },
  title: {
    'textDecorationLine': 'none',
    'font-family': "'Sanchez'",
    'color': '#ffffff',
    "fontSize": "34px",
  },
  date: {
    'textDecorationLine': 'none',
    'font-family': "'Sanchez'",
    'color': '#ffffff',
    "fontSize": "16",
  },
  divider: {
    'textDecorationLine': 'none',
    'font-family': "'Sanchez'",
    'color': '#6f6f6f',
    "fontSize": "10px",
    "flex-grow": "1",
  },
  spacer1: {
    height: "40px",
    background: "#1f2131",
  },
  spacer2: {
    height: "50px",
    background: "#1f2131",
  },
});

function BlogPostFeed(props) {
  const { classes } = props;
  return (
    <div className={classes.post}>
      <Link className={classes.title} to="/blogpost"> Title of Blog Post </Link>
      <div className={classes.date}> August 12 2020 </div>
      <div className={classes.spacer1}></div>
      <div className={classes.divider}> _________ </div>
      <div className={classes.spacer2}></div>
    </div>
  );
}

export default withStyles(styles)(BlogPostFeed);
