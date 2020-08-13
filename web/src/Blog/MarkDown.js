import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import markDownFile from './post.md'

const styles = theme => ({
  markdown: {
    height: "100%",
    width: "100%",
    color: "white",
    background: "#1f2131",
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
