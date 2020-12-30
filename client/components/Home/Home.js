import React from 'react';

const Home = () => {
  // componentDidMount() {
  //   window.onscroll = this.fakeInfinite;
  // }
  // componentWillUnmount() {
  //   window.onscroll = null;
  // }
  // fakeInfinite = () => {
  //   if (window.pageYOffset + 50 >= document.body.scrollHeight / 2) {
  //     window.scrollTo(0, 0);
  //   }
  // };

  return (
    <div className="homeRoot">
      <img
        className="homeWolfLogo"
        style={{ width: '80%' }}
        src="https://badgrey-other.s3.us-east-2.amazonaws.com/grey-scale-loading.png"
      />
      {/*<img
          className="homeWolfLogo"
          src="https://badgrey-other.s3.us-east-2.amazonaws.com/badGreyBlackWolfLogo.png"
        />*/}
    </div>
  );
};

export default Home;

/*
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
        <div className="homeMusicVideosContainer">
          <img
            className="homeFeatureBannerImage"
            src="https://badgrey-other.s3.us-east-2.amazonaws.com/dashBanner.jpg"
          />
          <div className="homeMusicVideos">
            <div className="homeSingleMusicVideo">Video</div>
            <div className="homeSingleMusicVideo">Video</div>
            <div className="homeSingleMusicVideo">Video</div>
            <div className="homeSingleMusicVideo">Video</div>
            <div className="homeSingleMusicVideo">Video</div>
          </div>
        </div>
        <div className="homeCitySoundsContainer">
          <img
            className="homeFeatureBannerImage"
            src="https://badgrey-other.s3.us-east-2.amazonaws.com/dashBanner.jpg"
          />
        </div>
        <div className="homeShopContainer">
          <img
            className="homeFeatureBannerImage"
            src="https://badgrey-other.s3.us-east-2.amazonaws.com/dashBanner.jpg"
          />
        </div>
      </div>
*/
