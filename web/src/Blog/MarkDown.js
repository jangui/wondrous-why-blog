import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

const styles = theme => ({
  markdown: {
    color: "white",
    "width": "87%",
    "min-wdith": "360px",
    "max-width": "960px",
    "text-align": "justify",
    //link styling
    "& a": {
      "color": "pink",
      "text-decoration": "none",
    },
    "& a:hover": {
      "color": "purple",
      "cursor": "pointer",
    },
    //table styling
    "& table": {
      "border-collapse": "collapse",
      "display": "block",
      "overflow": "auto",
    },
    "& th": {
      "padding": "15px",
      "text-align": "left",
      "border-bottom": "1px solid #6f6f6f",
    },
    "& td": {
      "color": "#e8e8e8",
      "padding": "15px",
      "text-align": "left",
      "border-left": "none",
      "border-right": "none",
      "border-bottom": "1px solid #6f6f6f",
    },
    "& tr:hover": {
      "background-color": "#303245",
    },
    //code styling
    "& pre": {
      "padding": "20px",
      "overflow-x": "auto",
    },
    //paragraph styling
    "& p": {
      "text-indent": "30px",
    },
    //blockqoute styling
    "& blockqoute": {
      "margin-top": "10px",
      "margin-bottom": "10px",
      "margin-left": "50px",
      "padding-left": "15px",
      "border-left": "3px solid #ffffff",
    },
    /*
    "& blockqoute": {
      "background": "#303245",
      "border-left": "10px solid #ccc",
      "margin": "1.5em 10px",
      "padding": "0.5em 10px",
      "quotes": '\\201C""\\201D""\\2018""\\2019',
    },
    "& blockqoute:before": {
      "color": "#ccc",
      "content": "open-quote",
      "font-size": "4em",
      "line-height": "0.1em",
      "margin-right": "0.25em",
      "vertical-align": "-0.4em",
    },
    "& blockqoute:before": {
      "display": "inline",
    }
    */
  },
  post404: {
    width: "100%",
    "text-align": "center",
    "color": "pink",
    "font-size": "36px",
    "text-decoration": "none",
    "&:hover": {
      "color": "purple",
      "cursor": "pointer",
    },
  },
  spacer404: {
    "width": "100%",
    "height": "15px",
  },
});

class MarkDown extends Component {
  constructor(props) {
    super(props);

    this.state = { markdown: null, err: false };
  }

  componentDidMount() {
    try {
      const filepath = require("." + this.props.filepath + ".md");
      fetch(filepath).then((response) => response.text()).then((text) => {
        this.setState({ markdown: text });
      });
    } catch {
      this.setState( {err: true } );
    }
  }

  render() {
    const { classes } = this.props;
    console.log("state: " + this.state.err);
    if (this.state.err === false) {
      return (
        <div className={classes.markdown}>
          <ReactMarkdown source={this.state.markdown} />
        </div>
      );
    } else {
      return (
        <>
          <div className={classes.spacer404}></div>
          <Link className={classes.post404} to='/'> 404 Page Not Found </Link>
        </>
      );
    }
  }
}

export default withStyles(styles)(MarkDown);
