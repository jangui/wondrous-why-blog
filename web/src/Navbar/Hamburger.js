import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';


const styles = theme => ({
  hamburger: {
    'display': 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-between',
    'align-items': 'center',
    'margin-top': '7px',
    'height': '20px',
    'width': '36px',
    'background': 'transparent',
    'border': 'none',
    'padding': '0px',
    'box-sizing': 'border-box',
    '&:focus': {
      'outline': 'none',
    },
  },
  hamburger__bun: {
    'width': '24px',
    'height': '0px',
    'background': '#6F6F6F',
    'border': '1px solid #6f6f6f',
    'border-radius': '8px',
  },
});

class Hamburger extends Component {
  render() {
    const { classes } = this.props;

    return (
      <button className={classes.hamburger} onClick={this.props.clickHandler}>
        <div className={classes.hamburger__bun}> </div>
        <div className={classes.hamburger__bun}> </div>
        <div className={classes.hamburger__bun}> </div>
      </button>
    );
  }
}

export default withStyles(styles)(Hamburger);

