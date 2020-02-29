import React, { Component } from 'react';
import { connect } from 'react-redux';
import USAMap from 'react-usa-map';
import '../../public/style.css';
import Genre from './Genre';
import BlogHomePage from './BlogHomePage';
import { FeaturedContent } from './FeaturedContent';
import { statesCustomConfig } from '../utils/states';

export class Discover extends Component {
  constructor(props) {
    super(props);
    this.scrollto = null;
  }

  componentDidMount() {
    window.onscroll = this.fakeInfinite;
  }

  componentWillUnmount() {
    this.scrollto = null;
    window.onscroll = null;
  }

  //changes route based on state clicked
  clickToState = event => {
    const stateName = event.target.dataset.name;
    if (
      stateName === 'DE' ||
      stateName === 'MD' ||
      stateName === 'VA' ||
      stateName === 'DC'
    ) {
      this.props.history.push('/discover/DMV');
    } else {
      this.props.history.push(`/discover/${stateName}`);
    }
  };

  setScroll = () => {
    let scrollto = 1420;
    if (window.matchMedia('(max-width: 600px)').matches) {
      scrollto = 900;
    } else if (
      window.matchMedia('(min-width: 600px)').matches &&
      window.matchMedia('(max-width: 900px)').matches
    ) {
      scrollto = 1200;
    } else if (
      window.matchMedia('(min-width: 1400px)').matches &&
      window.matchMedia('(max-width: 1800px)').matches
    ) {
      scrollto = 1570;
    } else if (window.matchMedia('(min-width: 1800px)').matches) {
      scrollto = 1700;
    }
    return scrollto;
  };

  fakeInfinite = () => {
    if (window.pageYOffset + 50 >= document.body.scrollHeight / 2) {
      window.scrollTo(0, 0);
    }
  };

  viewAllArtists = () => {
    this.props.history.push('/discover/all');
  };

  viewGlobalArtists = () => {
    this.props.history.push('/discover/International');
  };
  render() {
    let scrollto = this.setScroll();
    return (
      <div className="discover">
        <div className="bannerContainer">
          <img
            className="bannerImage"
            style={{ cursor: 'pointer' }}
            src="https://badgrey-other.s3.us-east-2.amazonaws.com/dashBanner.jpg"
            onClick={() =>
              window.open(
                'https://www.youtube.com/watch?v=izHkSruuvRw',
                '_blank'
              )
            }
          />
        </div>
        <div className="topContainer">
          <BlogHomePage
            spotlight={this.props.spotlight}
            blogs={this.props.nonSpotlight}
          />
          <FeaturedContent
            videos={this.props.videos}
            interview={this.props.interview}
          />
        </div>
        {//scrolls down to 1200 pixels to discover page if the discover button on the navbar is clicked. not sure if this is best way to do this
        this.props.match.path === '/discover'
          ? window.scroll(0, scrollto)
          : null}
        <h1>DISCOVER</h1>
        <div className="allAndGlobe">
          <div className="allArtistsLink">
            <button onClick={this.viewAllArtists} className="allArtistsButton">
              View All Artists
            </button>
          </div>
          <div className="internationalLink">
            <img
              className="globe"
              src={require('../../public/images/states/International.png')}
              onClick={this.viewGlobalArtists}
            />
            <label className="globeLabel">International</label>
          </div>
        </div>
        <div className="Map">
          <USAMap
            title="Choose Region"
            width={869}
            height={503}
            customize={statesCustomConfig()}
            onClick={this.clickToState}
          />
        </div>
        <div className="genreDiv">
          <Genre />
        </div>
        <div className="bannerContainer">
          <img
            className="bannerImage"
            style={{ cursor: 'pointer' }}
            src="https://badgrey-other.s3.us-east-2.amazonaws.com/dashBanner.jpg"
            onClick={() =>
              window.open(
                'https://www.youtube.com/watch?v=izHkSruuvRw',
                '_blank'
              )
            }
          />
        </div>
        <div className="topContainer">
          <BlogHomePage
            spotlight={this.props.spotlight}
            blogs={this.props.nonSpotlight}
          />
          <FeaturedContent
            videos={this.props.videos}
            interview={this.props.interview}
          />
        </div>
        <h1>DISCOVER</h1>
        <div className="allAndGlobe">
          <div className="allArtistsLink">
            <button className="allArtistsButton" onClick={this.viewAllArtists}>
              View All Artists
            </button>
          </div>
          <div className="internationalLink">
            <img
              className="globe"
              src={require('../../public/images/states/International.png')}
              onClick={this.viewGlobalArtists}
            />
            <label className="globeLabel">International</label>
          </div>
        </div>
        <div className="Map">
          <USAMap
            title="Choose Region"
            width={869}
            height={503}
            customize={statesCustomConfig()}
            onClick={this.clickToState}
          />
        </div>
        <div className="genreDiv">
          <Genre />
        </div>
      </div>
    );
  }
}

const mapState = ({
  artists,
  user,
  savedArtists,
  blogs,
  originalcontent,
  interviews
}) => {
  return {
    artists: artists.sort((artistA, artistB) => {
      if (artistA.name < artistB.name) return -1;
      if (artistA.name > artistB.name) return 1;
      return 0;
    }),
    user: user,
    isLoggedIn: !!user.id,
    savedArtists: savedArtists,
    blogs: blogs.blogs,
    spotlight: blogs.spotlight[0],
    nonSpotlight: blogs.nonSpotlight.slice(0, 4),
    videos: originalcontent
      .filter(content => content.contentType === 'MusicVideo')
      .slice(0, 5),
    interview: interviews[0]
  };
};

export default connect(mapState)(Discover);
