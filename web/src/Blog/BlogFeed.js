import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import BlogPostPreview from './BlogPostPreview';
import debounce from "lodash.debounce";

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

    this.state = {
      totalPosts: 0,
      posts: [],
      skip: 0,
      limit: 15,
      loadedPosts: 0,
      isLoading: false,
      error: false,
    };

    // scroll event handler
    window.onscroll = debounce( () => {
      const {
        loadPosts,
        state: {
          error,
          isLoading,
          posts,
          totalPosts,
        },
      } = this;

      // dont load posts if error, loading or done loading posts
      const doneLoading = posts.length >= totalPosts;
      if ( error || isLoading || doneLoading) return;

      // check page has scrolled to bottom
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
       loadPosts();
      }
    }, 100);
  }

  async componentDidMount() {
    // get total posts
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
      this.setState({ totalPosts: count });
    } catch (err) {
      console.log(err);
      //TODO interal server error render flag
    }

    // load posts
    this.loadPosts();
    this.setState({ limit: 10 });
  }

  loadPosts = () => {
    this.setState( {isLoading: true }, async () => {
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
        let loadedPosts = await res_posts.json();
        this.setState({
          posts: [
            ...this.state.posts,
            ...loadedPosts,
          ],
          skip: this.state.skip + this.state.limit,
          isLoading: false
        });
      } catch (err) {
        this.setState({ error: err.message, isLoading: false });
      }
    });
  }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.feed}>
        {this.state.posts.map( (obj, index) => {
          const date = new Date(obj.date);
          const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: 'numeric' })
          return <BlogPostPreview
            title={obj.title}
            date={dateTimeFormat.format(date)}
            filepath={obj.filepath}
            key={index}
          />
        })}
      </div>
    );
  }
}

export default withStyles(styles)(BlogFeed);
