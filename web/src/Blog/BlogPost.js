import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  post: {
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    height: "200px",
    widgth: "100px",
    margin: "10px",
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
});

function BlogPost(props) {
  const { classes } = props;
  return (
    <div className={classes.post}>
      <div className={classes.title}> Title of Blog Post </div>
      <div className={classes.date}> August 12 2020 </div>
      <div className={classes.divider}> _________ </div>
    </div>
  );
}

export default withStyles(styles)(BlogPost);
