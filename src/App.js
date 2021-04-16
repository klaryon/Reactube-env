import './App.css';
import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from './components/searchBarComponent';
import VideoList from './components/videoListComponent';
import VideoDetail from './components/videoDetailComponent';
import youtube from './apis/youtube';

class App extends Component {
  constructor() {
    super()
    this.state = {
      videos:[],
      selectedVideo: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleVideoSelect = this.handleVideoSelect.bind(this)
  }
 
  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get('/search', {
      params: {
        q:termFromSearchBar //specifies which term to search
      }
    })
    this.setState({
      videos: response.data.items, 
    })
    console.log(this.state.videos);
  }

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
    console.log(this.state.selectedVideo);
  }

  render() {
    const videos= this.state.videos; //other way---> const {videos, selectedVideo} = this.state;
    const selectedVideo= this.state.selectedVideo;

    return (
      <Container>
        <Row className="justify-content-md-left">
          <h1>Reactube 🎥✨</h1>
        </Row>
        <Row>
          <Col lg={12}>
            <SearchBar onHandleSubmitForm={this.handleSubmit}/>
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <VideoDetail selectedVideo={selectedVideo}/>
          </Col>
          <Col lg={4}>
            <VideoList videos={videos} onSelectVideo={this.handleVideoSelect}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App
