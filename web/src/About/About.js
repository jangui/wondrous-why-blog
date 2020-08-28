import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = theme => ({
  main: {
    'width': '100%',
    'display': 'flex',
    'justify-content': 'center',
    'background': '#1f2131',
    'text-align': 'center',
    'margin-top': '-20px',
    'font-family': '"Sanchez"',
    'color': '#ffffff',
    'margin-left': 'auto',
    'margin-right': 'auto',
    '& p': {
      'font-size': '22px',
    },
  },
  about: {
    'width': '87%',
    'max-width': '600px',
  },
});

class About extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <div className={classes.about}>
          <h1> Hello World </h1>
          <p> Jaime Danguillecourt here.</p>
          <p> Wondrous Why is a space for organizing
          my thoughts.</p>
          <p>Posts will run the gamut from philosophy to creative writing, poetry, spiritualism, economics, psychology, AI, neuroscience, physics, computers and health (both body and mind).
          I hope you enjoy your sojourn in my corner of the internet. </p>
        <p> About this website: I wrote this website's frontend w/ React, backend w/ Express, mongodb as database and traefik as my reverse proxy and edge router. Everything is dockerized because duh!</p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(About);
