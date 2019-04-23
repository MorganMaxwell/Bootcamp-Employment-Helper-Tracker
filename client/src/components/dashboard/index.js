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
  state = {
    posts: [],
    hasMorePosts: true,
    page: 0,
    myJobs: []
  };

  loadPosts() {
    let url = `/api/post/test/${this.state.page}`;
    axios({
      method: "get",
      url: url,
      // GET request data
    })
      // if we get empty array, error, null, etc, then change hasmoreposts to false
      .then(function (response) {

        // test for data, if there is some, then do stuff
        if (response.data) {

          let temp = this.state.posts;

          response.data.map(post => { return temp.push(post) });

          this.setState({
            posts: temp,
            pageNumber: this.state.pageNumber + 1
          });
          console.log(this.state.posts);

        }
        // if there isn't data, then quit trying to load posts
        else {
          this.setState({ hasMorePosts: false });
        };
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  getJobs = () => {
    axios.get('/api/job/')
      .then(res => {
        // console.log(res);
      })
  }

  componentDidMount() {
    this.getJobs();
  }

  render() {
    // infinite scroll demo does this, idk if there's a reason we can't directly use state
    let posts = [];
    this.state.posts.map(post => { return posts.push(post) });

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