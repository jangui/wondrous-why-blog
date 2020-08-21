import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import BlogPostPreview from './BlogPostPreview';
import axios from 'axios';

const styles = theme => ({
  feed: {
    display: "flex",
    height: "100%",
    width: "100%",
    "flex-direction": "column",
    "align-items": "center",
    background: "#1f2131",
  },
});

class BlogFeed extends Component {
  constructor(props) {
    super(props);

    this.state = { total_posts: 0, posts: [], skip: 0, limit: 10 };
  }

  async componentDidMount() {
    try {
      const options = {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      }
      let res = await fetch('http://backend:5000/posts/', options);
      console.log(res);
      //const count = parseInt(res.data);
      //this.setState({ total_posts: count });
    } catch (err) {
      console.log(err);
    }

    const payload = {
      "skip": this.state.skip,
      "limit": this.state.limit,
    }

    /*
    try {
      let resp = await axios.post(`backend:5000/posts/`, { payload });
      console.log(resp.data);
      this.setState({ skip: this.state.skip + this.state.limit, limit: 20 });
    } catch (err) {
      console.log(err);
    }
    */
  }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.feed}>
        <BlogPostPreview title="Why You Should Buy a Puppy in your 20's" date="august 12th 2020" filepath='post'/>
        <BlogPostPreview title="The Death of Conversation" date="august 12th 2020"/>
        <BlogPostPreview title="Why 'Wondrous Why'?" date="august 12th 2020"/>
        <BlogPostPreview title="The Monk Life" date="august 12th 2020"/>
        <BlogPostPreview title="The Age of Hyper Stimulus" date="august 12th 2020"/>
        <BlogPostPreview title="Growing Old, a Youthful Take" date="august 12th 2020"/>
        <BlogPostPreview title="Finding Meaning" date="august 12th 2020"/>
        <BlogPostPreview title="example title" date="august 12th 2020"/>
        <BlogPostPreview title="example title" date="august 12th 2020"/>
        <BlogPostPreview title="example title" date="august 12th 2020"/>
        <BlogPostPreview title="example title" date="august 12th 2020"/>
        <BlogPostPreview title="example title" date="august 12th 2020"/>
        <BlogPostPreview title="example title" date="august 12th 2020"/>
      </div>
    );
  }
}

export default withStyles(styles)(BlogFeed);
