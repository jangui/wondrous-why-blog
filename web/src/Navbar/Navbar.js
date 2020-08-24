import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';


const styles = theme => ({
  nav__main: {
    'width': '100%',
    'background': '#303245',
    'position': 'fixed',
    'box-sizing': 'border-box',
    'padding': '15px 20px',
    'border-bottom': '1px solid #6f6f6f',
    'border-top': '1px solid #6f6f6f',
    },
  nav__flex: {
    'display': 'flex',
    'flex-direction': 'row',
    'justify-content': 'space-between',
    },
  nav__link: {
    'textDecorationLine': 'none',
    'font-family': "'Sanchez'",
    'color': '#ffffff',
    "padding": "5px 10px",
    "fontSize": "22px",
    'margin-left': '5px',
    },
  nav__left: {
    'display': 'flex',
    'flex-direction': 'row',
    'justify-content': 'left',
    'text-align': 'left',
    'flex-grow': '1',
    'white-space': 'nowrap',
  },
  nav__right: {
    'display': 'flex',
    'width': '75px',
    'flex-direction': 'row',
    'flex-shrink': '1',
    'text-align': 'left',
  },
  search_submit: {
    'width': "39px",
    'background': '#303345',
    'color': '#ffffff',
    'font-family': "'Sanchez'",
    'caret-color': "transparent",
    'border': "2px solid #6F6F6F",
    'border-radius': "25px",
    'margin-top': '3px',
    'padding': "5px 7px",
    "-webkit-transition": "width 0.4s ease-in-out",
    "transition": "width 0.4s ease-in-out",
    '&:focus': {
      "width": "60px",
    },
  }
});

class Navbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <nav className={classes.nav__main}>
        <div className={classes.nav__flex}>
          <div className={classes.nav__left}>
            <Hamburger clickHandler={this.props.panelClickHandler}/>
            <Link className={classes.nav__link} to='/'>Wondrous Why</Link>
          </div>
          <div className={classes.nav__right}>
            <form type="text" action="/search/" autoComplete="off">
              <input
                type="sumbit"
                name="search"
                className={classes.search_submit}
                placeholder="Search..."
              />
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
