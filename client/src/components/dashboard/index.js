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
      hasMorePosts: true
    };
  };

  loadPosts() {
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
    // axios.get('/dash/posts/', {

    // })
    //   // if no more posts, pass a boolean to say so
    //   .then(function (response) {
    //     if (response.endSim) {
    //       this.setState({ hasMorePosts: false });
    //     };
    //     let temp = this.state.posts;
    //     response.map(post => { return temp.push(post) });
    //     this.setState({ posts: temp });
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  render() {

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