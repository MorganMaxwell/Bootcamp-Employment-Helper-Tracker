import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import NavHead from "../NavHead";
import Stats from "../Stats";
import Feed from "../Feed";
import Posts from "../Posts";
import InfiniteScroll from 'react-infinite-scroller';
import MyJobs from "../MyJobs";
import axios from 'axios';
import CreatePost from '../CreatePost';

class Dashboard extends Component {
  state = {
    posts: [],
    hasMorePosts: true,
    page: 0,
    myJobs: []
  };

  loadPosts = () => {
    let url = `/api/post/test/${this.state.page}`;
    axios({
      method: "get",
      url: url,
    })
      .then(response => {
        if (response.data) {
          let temp = this.state.posts;
          response.data.map(post => { return temp.push(post) });
          this.setState({
            posts: temp,
            page: this.state.page + 1
          });
          if (response.data.length < 10) {
            this.setState({ hasMorePosts: false });
          };
        }
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
      });
  };

  componentDidMount = () => {
    this.getJobs();
  };

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
              <Feed>
                <InfiniteScroll
                  pageStart={0}
                  loadMore={this.loadPosts.bind(this)}
                  hasMore={this.state.hasMorePosts}
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
              </Feed>
            </Col>
            <Col sm="3"><MyJobs></MyJobs></Col>
          </Row>
        </Container>
      </div>
    );
  };
};

export default Dashboard;