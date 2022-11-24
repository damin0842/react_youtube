import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'
import { Video } from './'

const SearchConts = () => {
  const [videos, setVideos] = useState(null)
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    )
  }, [searchTerm])

  return (
    <>
      <div className="result">{searchTerm}를 검색하였습니다.</div>
      <div>
        <Video videos={videos} />
      </div>
    </>
  )
}

export default SearchConts
