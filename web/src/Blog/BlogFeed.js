import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import BlogPostPreview from './BlogPostPreview';
import FailedSearch from './FailedSearch';
import debounce from "lodash.debounce";
import queryString from 'query-string';
import Err from '../Err';

const url = 'https://api.' + process.env.REACT_APP_DOMAIN + '/';

const styles = theme => ({
  feed: {
    'display': 'flex',
    'height': '100%',
    'width': '100%',
    'flex-direction': 'column',
    'align-items': 'center',
    'justify-content': 'center',
    'background': "#1f2131",
    'flex-wrap': 'nowrap',
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
      search: '',
      searched: false,
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
      let path = this.props.search;
      let params = queryString.parse(path);
      let search = (typeof params['search'] === 'undefined') ? '' : params['search'];
      this.setState({search: search});
      const payload = { "search": search }
      const options = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
      let res = await fetch(url + 'posts/count', options);
      let response = await res.json();
      const count = parseInt(response);
      this.setState({ totalPosts: count });
    } catch (err) {
      console.log(err);
    }

    // load posts
    this.loadPosts();
    setTimeout( () => this.setState({ searched: true }), 100);
  }

  loadPosts = () => {
    this.setState( {isLoading: true }, async () => {
      try {
        const payload = {
          "skip": this.state.skip,
          "limit": this.state.limit,
          "search": this.state.search,
          "order": this.props.order,
          "type": this.props.filter,
        }
        const options = {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
        let res_posts = await fetch(url + 'posts/search', options);
        let loadedPosts = await res_posts.json();

        //check that we'll only try to load remaining posts
        if (this.state.skip + this.state.limit >= this.state.totalPosts) {
          this.setState({limit: this.state.totalPosts - this.state.skip});
        }

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
        console.log(err.message);
      }
    });
  }


  render() {
    const { classes } = this.props;
    if (
      this.state.searched === true
      && !(this.props.search === '')
      && this.state.posts.length === 0
    ) {
      return (
        <FailedSearch />
      );
    }
    let content;
    content = this.state.posts.map( (obj, index) => {
      const date = new Date(obj.date);
      const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: 'numeric' })
      return <BlogPostPreview
        title={obj.title}
        date={dateTimeFormat.format(date)}
        filepath={obj.filepath}
        key={index}
      />
    })
    if (this.state.error) {
      content = <Err errMsg="500 Internal Server Error" />
    }

    return (
      <div className={classes.feed}>
      {content}
      </div>
    );
  }
}

export default withStyles(styles)(BlogFeed);
