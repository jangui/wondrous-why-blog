import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import markDownFile from './post.md'

const styles = theme => ({
  markdown: {
    color: "white",
    "width": "90%",
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
      "curso": "pointer",
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
});

class MarkDown extends Component {
  constructor(props) {
    super(props);

    this.state = { markdown: null };
  }

  componentWillMount() {
    fetch(markDownFile).then((response) => response.text()).then((text) => {
      this.setState({ markdown: text });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.markdown}>
        <ReactMarkdown source={this.state.markdown} />
      </div>
    );
  }
}

export default withStyles(styles)(MarkDown);
