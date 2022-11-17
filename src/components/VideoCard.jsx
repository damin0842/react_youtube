import React from 'react'
import { Link } from 'react-router-dom'
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <div className="box">
      <Link to={`/video/${videoId}`}>
        <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title} />
      </Link>
      <div className="boxInfo">
        <Link to={`/video/${videoId}`}>
          {snippet?.title.slice(0, 50).replace(/&quot;/g, '"')}
        </Link>
        <Link className="aa" to={`/channel/${snippet.channelId}`}>
          {snippet?.channelTitle}
        </Link>
      </div>
    </div>
  )
}

export default VideoCard
