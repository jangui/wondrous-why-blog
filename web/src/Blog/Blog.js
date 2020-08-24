import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import SidePanel from '../SidePanel';
import BackDrop from '../BackDrop';
import BlogFeed from './BlogFeed';

const styles = theme => ({
  main: {
    height: "100%",
    width: "100%",
    background: "#1f2131",
  },
  spacer: {
    height: "100px",
    background: "#1f2131",
  },

});

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidePanelOpen: false,
    };
  }

  sidePanelClickHandler = () => {
    this.setState( (prevState) => {
      return {sidePanelOpen: !prevState.sidePanelOpen}
    });

  };

  backDropClickHandler = () => {
    this.setState({sidePanelOpen: false});
  };

  render() {
    const { classes } = this.props;
    let backDrop;

    if (this.state.sidePanelOpen) {
      backDrop = <BackDrop clickHandler={this.backDropClickHandler}/>;
    }

    return (
      <div className={classes.main}>
        <Navbar panelClickHandler={this.sidePanelClickHandler}/>
        <SidePanel visible={this.state.sidePanelOpen}/>;
        {backDrop}
        <div className={classes.spacer}></div>
        <BlogFeed search={this.props.location.search}/>
      </div>
    );
  }
}

export default withStyles(styles)(Blog);
