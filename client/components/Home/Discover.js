import React, { Component } from 'react';
import { connect } from 'react-redux';
import USAMap from 'react-usa-map';
import '../../../public/styles/index.scss';
import Genre from './Genre';
// import BlogHomePage from './BlogHomePage';
// import { FeaturedContent } from './FeaturedContent';
import { statesCustomConfig } from '../../utils/states';

export class Discover extends Component {
  constructor(props) {
    super(props);
    this.scrollto = null;
  }

  componentDidMount() {
    window.scroll(0, 0);
  }

  //changes route based on state clicked
  clickToState = (event) => {
    const stateName = event.target.dataset.name;
    if (
      stateName === 'DE' ||
      stateName === 'MD' ||
      stateName === 'VA' ||
      stateName === 'DC'
    ) {
      this.props.history.push('/RapMap/DMV');
    } else {
      this.props.history.push(`/RapMap/${stateName}`);
    }
  };

  viewAllArtists = () => {
    this.props.history.push('/RapMap/all');
  };

  viewGlobalArtists = () => {
    this.props.history.push('/RapMap/International');
  };
  render() {
    return (
      <div className="discover">
        <h1>DISCOVER</h1>
        <div className="allAndGlobe">
          <div>
            <button onClick={this.viewAllArtists} className="allArtistsButton">
              View All Artists
            </button>
          </div>
          <div className="internationalLink">
            <img
              className="globe"
              src={
                'https://badgrey-states.s3.us-east-2.amazonaws.com/International.png'
              }
              onClick={this.viewGlobalArtists}
            />
            <label className="globeLabel">International</label>
          </div>
        </div>
        <div className="map">
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

const mapState = ({ artists, user, savedArtists, blogs, originalcontent }) => ({
  artists: artists.artists,
  user: user,
  isLoggedIn: !!user.id,
  savedArtists: savedArtists,
  blogs: blogs.blogs,
  spotlight: blogs.spotlight[0],
  nonSpotlight: blogs.nonSpotlight.slice(0, 4),
  featuredContent: originalcontent.featuredContent,
});

export default connect(mapState)(Discover);
