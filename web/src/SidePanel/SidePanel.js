import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styles = theme => ({
  sidePanel: {
    'height': '100%',
    'background': '#303245',
    'border': '2px solid #6f6f6f',
    'position': 'fixed',
    'top': '0',
    'left': '0',
    'max-width': '400px',
    'width': '60%',
    'z-index': '200',
    'transform': 'translateX(-100%)',
    'transition': 'transform 0.3s ease-out',
    '& ul': {
      'list-style': 'none',
      'display': 'flex',
      'flex-direction': 'column',
      'justify-content': 'center',
    },
    '& li': {
      'margin': '0px 0px',

    },
    '& a': {
      'color': 'purple',
      'text-decoration': 'none',
      '&:hover': {
        'color': 'pink',
      },
    },
  },
  extend: {
    'transform': 'translateX(0%)',
  },
});

class SidePanel extends Component {
  render() {
    const { classes } = this.props;
    let style = classes.sidePanel
    if (this.props.visible) {
      style = `${classes.sidePanel} ${classes.extend}`;
    }
    return (
      <nav className={style}>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/">Filter: New</Link></li>
        </ul>
      </nav>
    );
  }
}

export default withStyles(styles)(SidePanel);

