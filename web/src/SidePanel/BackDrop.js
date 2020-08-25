import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';

const styles = theme => ({
  backdrop: {
    'position': 'fixed',
    'top': '0',
    'left': '0',
    'height': '100%',
    'width': '100%',
    'background': '#6F6F6F',
    'z-index': '100',
    'opacity': '0.3',
  },
});

class BackDrop extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.backdrop} onClick={this.props.clickHandler}></div>
    );
  }
}

export default withStyles(styles)(BackDrop);

