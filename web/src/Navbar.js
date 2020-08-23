import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const styles = theme => ({
  nav: {
    'width': '100vw',
    'width': '100%', //fallback
    'background': '#303245',
    "max-height": "70px",
    'position': 'fixed',
    'top': '0px',
    'box-sizing': 'border-box',
    'padding': '20px 50px',
    'display': 'flex',
    'flex-direction': 'row',
    'justify-content': 'space-between',
    'align-self': 'strech',
    'border-bottom': '1px solid #6f6f6f',
    'border-top': '1px solid #6f6f6f',
    },
  nav__link: {
    'textDecorationLine': 'none',
    'font-family': "'Sanchez'",
    'color': '#ffffff',
    "padding": "5px 10px",
    "fontSize": "22px"
    },
  nav__left: {
    'display': 'flex',
    'flex-direction': 'row',
    'justify-content': 'space-between',
  },
  nav__right: {
    'display': 'flex',
    'flex-direction': 'row',
    'justify-content': 'space-between',
  },
  search_submit: {
    'background': '#303345',
    'color': '#ffffff',
    'border': "none",
    'margin-top': '9px'
  }
});

class Navbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <nav className={classes.nav}>
        <div className={classes.nav__left}>
          <Link className={classes.nav__link} to='/'>| | |</Link>
          <Link className={classes.nav__link} to='/'>Wondrous Why</Link>
        </div>
        <div className={classes.nav__right}>
          <form type="text">
            <input
              type="sumbit"
              name="search"
              className={classes.search_submit}
              placeholder="Search ..."
            />
          </form>
        </div>
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
