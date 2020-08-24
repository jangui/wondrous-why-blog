import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import MarkDown from './MarkDown';

const styles = theme => ({
  main: {
    'background': '#1f2131',
    'margin-top': '-30px',
  },
  post: {
    'height': '100%',
    'width': '100%',
    'display': 'flex',
    'justify-content': 'center',
    'margin-left': 'auto',
    'margin-right': 'auto',
    'flex-wrap': 'wrap',
  },
  spacer: {
    'height': '10px',
  },
});

class BlogPost extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <div className={classes.post}>
          <MarkDown filepath={this.props.location.pathname}/>
        </div>
        <div className={classes.spacer}></div>
      </div>
    );
  }
}

export default withStyles(styles)(BlogPost);
