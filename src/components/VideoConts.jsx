import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { fetchAPI } from '../utils/fetchAPI'
import { Video, Loader } from './index'
import { useParams, Link } from 'react-router-dom'
const VideoConts = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    )
    // relatedToVideoId 있어야 플레이 가능
    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    )
  }, [id])

  if (!videoDetail?.snippet) return <Loader />

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail

  return (
    <section className="videoConts">
      <div className="container">
        <div className="video__inner">
          <div className="left">
            <div className="play">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
              />
            </div>
            <div className="desc">
              <span className="title">{title}</span>
              <div className="channel">
                <Link to={`/channel/${channelId}`}>{channelTitle}</Link>
              </div>
              <div className="viewCount">조회수{viewCount}</div>
              <div className="likeCount">좋아요{likeCount}</div>
            </div>
          </div>
          <div className="right">
            <Video videos={videos} />
          </div>
        </div>
      </div>
    </section>
  )
}
export default VideoConts
