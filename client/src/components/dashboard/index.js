import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import NavHead from "../NavHead";
import Stats from "../Stats";
import Posts from "../Posts";
import MyJobs from "../MyJobs";
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';

const data = [
  {
    title: "test",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test2",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test3",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test2",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test3",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test2",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test3",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test3",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test2",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  }
];

const data2 = [
  {
    title: "test",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test2",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test3",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test2",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test3",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  },
  {
    title: "test",
    body: "Reprehenderit sint deserunt ut occaecat labore.",
    date: "date"
  }
];



class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasMorePosts: true,
      myJobs: []
    };
  };

  loadPosts() {
    // this block will be deleted once back end is connected
    console.log(this.state.posts);
    if (this.state.posts.length === 0) {
      console.log(this.state.hasMorePosts);
      this.setState({ posts: data });
    }
    else if (this.state.posts.length === 12) {
      let temp = this.state.posts;
      console.log(this.state.hasMorePosts);
      data2.map(post => { return temp.push(post) });
      this.setState({ posts: temp });
    }
    else if (this.state.posts.length === 19) {
      console.log(this.state.hasMorePosts);
      this.setState({ hasMorePosts: false });
    };


    // axios.get('/api/post/', {
    //   // GET request data
    // })
    //   // if we get empty array, error, null, etc, then change hasmoreposts to false
    //   .then(function (response) {
    //     // test for data, if there is some, then do stuff
    //     if (response.data) {
    //       // this is my workaround to not directly affect this.state, if there's a better way I want to use it.
    //       // make a temp array
    //       let temp = this.state.posts;
    //       // push response data into temp
    //       response.map(post => { return temp.push(post) });
    //       // assign state equal to temp array
    //       this.setState({ posts: temp });
    //     }
    //     // if there isn't data, then quit trying to load posts
    //     else {
    //       this.setState({ hasMorePosts: false });
    //     };
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  getJobs = () => {
    axios.get('/api/job/')
    .then(res => {
      console.log(res);
    })
  }

  componentDidMount() {
    this.getJobs();
  }

  render() {
    // infinite scroll demo does this, idk if there's a reason we can't directly use state
    let posts = [];
    this.state.posts.map(post => { return posts.push(post)});

    return (
      <div>
        <NavHead></NavHead>
        <Container fluid={true}>
          <Row>
            <Col sm="3"><Stats></Stats></Col>
            <Col sm="6">
              <InfiniteScroll
                pageStart={0}
                // element={Posts}
                loadMore={this.loadPosts.bind(this)}
                hasMore={this.state.hasMorePosts/*boolean to tell it to quit loading */}
                loader={<div className="loader" key={0}>Loading ...</div>}
              >
                {posts.map(post => {
                  return (
                    <Posts
                      title={post.title}
                      body={post.body}
                      date={post.date}
                    ></Posts>
                  );
                })}
              </InfiniteScroll>
            </Col>
            <Col sm="3"><MyJobs></MyJobs></Col>
          </Row>
        </Container>
      </div>
    );
  };
};

export default Dashboard;