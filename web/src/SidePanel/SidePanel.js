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
      'height': '100%',
      'width': '100%',
      'display': 'flex',
      'padding': '0px 0px',
      'flex-direction': 'column',
    },
    '& li': {
      'margin': '15px 0px',
      'text-align': 'center',

    },
    '& a': {
      'color': 'pink',
      'font-family': '"Sanchez"',
      'font-size': '32px',
      'text-decoration': 'none',
      'transition': '0.3s',
      '&:hover': {
        'color': 'purple',
      },
    },
  },
  extend: {
    'transform': 'translateX(0%)',
  },
  orderButton: {
    'background-color': 'transparent',
    'font-family': '"Sanchez"',
    'font-size': '32px',
    'border': 'none',
    'text-decoration': 'none',
    'color': 'pink',
    'padding': '0px 0px',
    'transition': '0.3s',
    '&:hover': {
      'color': 'purple',
    },
  },
  divider: {
    'color': '#6f6f6f',
    'font-size': '10px',
    'font-family': '"Sanchez"',
  },
});

class SidePanel extends Component {
  render() {
    const { classes } = this.props;

    // side bar animation
    let style = classes.sidePanel
    if (this.props.visible) {
      style = `${classes.sidePanel} ${classes.extend}`;
    }
    let orderBtn;
    if (this.props.showOrderBtn === true) {
      orderBtn =
          <>
            <li className={classes.divider}> _______ </li>
            <li>
              <button
                className={classes.orderButton}
                onClick={this.props.orderClickHandler}>
              Order: {this.props.order}
              </button>
            </li>
          </>
    }
    let filterBtn;
    if (this.props.showOrderBtn === true) {
      filterBtn =
          <>
            <li className={classes.divider}> _______ </li>
            <li>
              <button
                className={classes.orderButton}
                onClick={this.props.filterClickHandler}>
              Filter: {this.props.filter}
              </button>
            </li>
          </>
    }

    return (
      <nav className={style}>
        <ul>
          <li><Link to="/about">About</Link></li>
          {orderBtn}
          {filterBtn}
        </ul>
      </nav>
    );
  }
}

export default withStyles(styles)(SidePanel);

