import React from 'react'
import { Link } from 'react-router-dom'
import {YoutubePlayer} from './index'

export const FeaturedContent = ({videos, interview}) => {
  return (
    videos.length === 0 || !interview ? null :
    <div className="featuredContentContainer">
    <h1 className="featuredContentTitle">Featured Content</h1>
    {
      videos.map(video => {
        return (
          <div className="singleVideo" key={video.id}>
            <YoutubePlayer ytID={video.youtubeId} />
          </div>
        )
      })
    }
      <div key={interview.id} className="homeInterview">
      <h1>{interview.artist.name}</h1>
        <div className="homeInterviewPic">
          <img src={interview.artist.imageURL} />
        </div>
        <div>
          <Link to={`/interviews/${interview.id}`}>
            <button className="interviewButton">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

