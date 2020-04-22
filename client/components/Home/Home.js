import React, { PureComponent } from 'react';

class Home extends PureComponent {
  componentDidMount() {
    window.onscroll = this.fakeInfinite;
  }
  componentWillUnmount() {
    window.onscroll = null;
  }
  fakeInfinite = () => {
    if (window.pageYOffset + 50 >= document.body.scrollHeight / 2) {
      window.scrollTo(0, 0);
    }
  };

  render() {
    return (
      <div className="homeRoot">
        <div className="homeFeatureBannerContainer">
          <img
            className="homeFeatureBannerImage"
            src="https://badgrey-other.s3.us-east-2.amazonaws.com/dashBanner.jpg"
            onClick={() =>
              window.open(
                'https://www.youtube.com/watch?v=izHkSruuvRw',
                '_blank'
              )
            }
          />
        </div>
      </div>
    );
  }
}

export default Home;
