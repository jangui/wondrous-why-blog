import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import Navbar from '../Navbar';
import { SidePanel } from '../SidePanel';
import BackDrop from '../SidePanel/BackDrop';
import BlogFeed from './BlogFeed';
import BlogPost from './BlogPost';
import { Err404 } from '../Err';

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

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidePanelOpen: false,
      order: ['new', 'old'],
      orderInd: 0,
      orderOld: null,
      feedKey: 0,
    };
  }

  componentDidMount() {
    let order = this.state.order[this.state.orderInd];
    this.setState( {orderOld: order} );
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


  render() {
    const { classes } = this.props;
    let backDrop;

    if (this.state.sidePanelOpen) {
      backDrop = <BackDrop clickHandler={this.backDropClickHandler}/>;
    }

    let order = this.state.order[this.state.orderInd];
    if (this.state.orderOld != order) {
      let newKey = (this.state.feedKey + 1) % 2;
      this.setState( {feedKey: newKey, orderOld: order } );
    }

    let content = <BlogFeed
      search={this.props.location.search}
      order={order}
      key={this.state.feedKey}
      />
    if (this.props.content === "err404") {
      content = <Err404 />
    } else if ( this.props.content === "post") {
      content = <BlogPost location={this.props.location}/>
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

export default withStyles(styles)(Blog);
