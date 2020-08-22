import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import BlogPostPreview from './BlogPostPreview';

const url = 'https://api.' + process.env.REACT_APP_DOMAIN + '/';

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

    this.state = { total_posts: 0, posts: [], skip: 0, limit: 3 };
  }

  async componentDidMount() {
    try {
      const options = {
        method: "GET",
        headers: {
          'Authorization': process.env.REACT_APP_AUTH,
        }
      }
      let res = await fetch(url + 'posts/count', options);
      let response = await res.json();
      const count = parseInt(response);
      this.setState({ total_posts: count });
    } catch (err) {
      console.log(err);
    }


    try {
      const payload = {
        "skip": this.state.skip,
        "limit": this.state.limit,
      }
      const options = {
        method: "POST",
        headers: {
          'Authorization': process.env.REACT_APP_AUTH,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
      let res_posts = await fetch(url + 'posts/', options);
      let posts = await res_posts.json();
      console.log(posts);
      this.setState({ posts: posts, skip: this.state.skip + this.state.limit, limit: 3 });
    } catch (err) {
      console.log(err);
    }
  }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.feed}>
        {this.state.posts.map( obj => (
          <BlogPostPreview title={obj.title} date={obj.date} filepath={obj.filepath}/>
        ))}
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
