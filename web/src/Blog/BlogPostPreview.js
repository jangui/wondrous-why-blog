import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = theme => ({
  post: {
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
  },
  title: {
    'textDecorationLine': 'none',
    'font-family': '"Sanchez"',
    'fontSize': '34px',
    'text-align': 'center',
    'color': '#ffffff',
    'transition': '0.3s',
    '&:hover': {
      'color': 'purple',
    },
  },
  date: {
    'textDecorationLine': 'none',
    'font-family': '"Sanchez"',
    'fontSize': '16px',
  },
  divider: {
    'textDecorationLine': 'none',
    'font-family': '"Sanchez"',
    'color': '#6f6f6f',
    'fontSize': '10px',
    'flex-grow': '1',
  },
  spacer1: {
    'height': '40px',
    'background': '#1f2131',
  },
  spacer2: {
    'height': '50px',
    'background': '#1f2131',
  },
});

class BlogPostPreview extends Component {
  render() {
    const { classes } = this.props;
    return (
    <div className={classes.post}>
      <Link className={classes.title} to={`/post/${this.props.filepath}`}>
        { this.props.title }
        <div className={classes.date}> { this.props.date } </div>
      </Link>
      <div className={classes.spacer1}></div>
      <div className={classes.divider}> _________ </div>
      <div className={classes.spacer2}></div>
    </div>
    );
  }
}

export default withStyles(styles)(BlogPostPreview);
