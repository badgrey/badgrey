import React from 'react';
import { YoutubePlayer } from '../index';
import '../../../public/styles/index.scss';

export const FeaturedContent = ({ videos }) => {
  return videos.length === 0 ? null : (
    <div className="featuredContentContainer">
      <h1 className="featuredContentTitle">NEW VIDEOS</h1>
      {videos.map(video => {
        return (
          <div className="singleVideo" key={video.id}>
            <YoutubePlayer ytID={video.youtubeId} />
          </div>
        );
      })}
    </div>
  );
};
