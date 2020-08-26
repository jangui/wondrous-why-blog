import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import Navbar from './Navbar';
import { SidePanel, BackDrop } from './SidePanel';
import { BlogFeed, BlogPost } from './Blog';
import Err from './Err';

const styles = theme => ({
  main: {
    'width': '100%',
    'background': '#1f2131',
    'font-family': '"Sanchez"',
  },
  spacer: {
    'height': '100px',
    'background': '#1f2131',
  },

});

class Portal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidePanelOpen: false,
      order: ['new', 'old'],
      orderInd: 0,
      feedKey: 0,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  sidePanelClickHandler = () => {
    this.setState( (prevState) => {
      return {sidePanelOpen: !prevState.sidePanelOpen}
    });
  };

  orderClickHandler = () => {
    let newOrderInd = (this.state.orderInd + 1) % this.state.order.length;
    this.setState( (prevState) => {
      return {orderInd: newOrderInd}
    });
  };

  backDropClickHandler = () => {
    this.setState({sidePanelOpen: false});
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.orderInd  !== prevState.orderInd) {
      let newKey = (this.state.feedKey + 1) % 2;
      this.setState( {feedKey: newKey} );
    }
  }

  render() {
    const { classes } = this.props;
    let backDrop;

    if (this.state.sidePanelOpen) {
      backDrop = <BackDrop clickHandler={this.backDropClickHandler}/>;
    }

    let order = this.state.order[this.state.orderInd];

    let content;
    if (this.props.content === "err404") {
      content = <Err errMsg="404 Page Not Found" />
    } else if ( this.props.content === "post") {
      content = <BlogPost location={this.props.location}/>
    } else if ( this.props.content === "feed") {
      content = <BlogFeed
      search={this.props.location.search}
      order={order}
      key={this.state.feedKey}
      />
    }

    return (
      <div className={classes.main}>
        <Navbar panelClickHandler={this.sidePanelClickHandler}/>
        <SidePanel
          visible={this.state.sidePanelOpen}
          order={order}
          orderClickHandler={this.orderClickHandler}/>
        {backDrop}
        <div className={classes.spacer}></div>
        {content}
      </div>
    );
  }
}

export default withStyles(styles)(Portal);
