import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import NavHead from "../NavHead";
import Stats from "../Stats";
import Feed from "../Feed";
import Posts from "../Posts";
import InfiniteScroll from 'react-infinite-scroller';
import MyJobs from "../MyJobs";
import StickyWrap from "../StickyWrap";
import axios from 'axios';

class Dashboard extends Component {
  state = {
    posts: [],
    hasMorePosts: true,
    page: 0,
    myJobs: [],
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
        console.log(res.data);
        
        this.setState({allJobs: res.data})
      });
  };
  componentDidMount = () => {
    this.getJobs();
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
  // end of post requests

  render() {
    let posts = [];
    this.state.posts.map(post => { return posts.push(post) });

    return (
      <div>
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
                        key={post.title}
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
                <MyJobs/>
              </StickyWrap>   
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
};

export default Dashboard;