import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = theme => ({
  main: {
    'width': '100%',
    'background': '#1f2131',
    'text-align': 'center',
    'margin-top': '-20px',
    },
  'err': {
    'color': 'pink',
    'font-size': '36px',
    'text-decoration': 'none',
    'transition': '0.3s',
    '&:hover': {
      'color': 'purple',
      'cursor': 'pointer',
    },
  },
});

class Err extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <Link className={classes.err} to='/'>{this.props.errMsg}</Link>
      </div>
    );
  }
}

export default withStyles(styles)(Err);
