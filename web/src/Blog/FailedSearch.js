import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const styles = theme => ({
  main: {
    'width': '100%',
    'height': '100%',
    background: "#1f2131",
    "text-align": "center",
    },
  spacer: {
    height: "90px",
    background: "#1f2131",
  },
  "err": {
    "color": "pink",
    "font-size": "36px",
    "text-decoration": "none",
    "&:hover": {
      "color": "purple",
      "cursor": "pointer",
    },
  },
});

class FailedSearch extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <Link className={classes.err} to='/'>No Posts Matching Search
          <p> ☹ </p>
        </Link>
      </div>
    );
  }
}

export default withStyles(styles)(FailedSearch);
