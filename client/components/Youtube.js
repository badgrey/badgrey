import React, {Component} from 'react';
import YouTube from 'react-youtube';
import {connect} from 'react-redux'

//necessary component to display youtube videos
export class YoutubePlayer extends Component {

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }

  render() {
    const opts = {
      height: '290',
      width: '540',
      playerVars: {
        autoplay: 0
      }
    };

    return (
      <YouTube
        videoId={this.props.ytID}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
}
const mapState = null

const mapDispatch = null

export default connect(mapState, mapDispatch)(YoutubePlayer)
