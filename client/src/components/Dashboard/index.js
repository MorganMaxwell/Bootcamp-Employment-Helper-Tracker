import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import NavHead from "../NavHead";
import Stats from "../Stats";
import Feed from "../Feed";
import Posts from "../Posts";
import InfiniteScroll from 'react-infinite-scroller';
import JobFeed from "../JobFeed";
import StickyWrap from "../StickyWrap";
import axios from 'axios';
import './style.css';

class Dashboard extends Component {
  state = {
    posts: [],
    hasMorePosts: true,
    page: 0,
    JobFeed: [],
    allJobs: []
  };

  // initial data load group
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
        this.setState({ allJobs: res.data })        
      });
  };
  // end of initial data load group

  // post requests
  createPost = (post) => {

    axios({
      method: "post",
      url: "/api/post/",
      data: post
    }).then(() => this.loadPosts())
      .catch(err => console.log(err));
  };
  createJob = job => {
    axios({
      method: "post",
      url: "/api/job/",
      data: job
    }).then(() => this.getJobs())
      .catch(err => console.log(err));
  };
  // end of post requests

  // PUT requests

  // end of PUT requests

  render() {
    let posts = [];
    this.state.posts.map(post => { return posts.push(post) });

    return (
      <div id="main">
        <NavHead></NavHead>
        <Container fluid={true}>
          <Row>
            <Col sm="3">
              <StickyWrap>
              <Stats
                // jobs={this.state.allJobs}
              />
              </StickyWrap>
            </Col>
            <Col sm="6">
              <Feed
                createPost={this.createPost}
              >
                <InfiniteScroll
                  pageStart={0}
                  loadMore={this.loadPosts.bind(this)}
                  hasMore={this.state.hasMorePosts}
                  loader={<div className="loader" key={0}>Loading ...</div>}
                >
                  {posts.map(post => {
                    return (
                      <Posts
                        key={post._id}
                        title={post.title}
                        body={post.body}
                        date={post.date}
                      ></Posts>
                    );
                  })}
                </InfiniteScroll>
              </Feed>
            </Col>
            <Col sm="3">
              <StickyWrap>
                <JobFeed
                  createJob={this.createJob} 
                  jobs={this.state.allJobs}
                />
              </StickyWrap>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
};

export default Dashboard;