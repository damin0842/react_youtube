import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../utils/fetchAPI'
import { Category, Video } from './index'
import dummy from '../utils/dummy.json'

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState('webstoryboy')
  //const [videos, setVideos] = useState(null)
  const [videos, setVideos] = useState(dummy.items)

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectCategory}&type=video`).then(
      (data) => setVideos(data.items)
    )
  }, [selectCategory])
  return (
    <main id="main">
      <aside id="aside">
        <Category
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </aside>
      <section id="contents">
        <h2>
          유튜버 <em>{selectCategory}</em>
        </h2>
        <Video videos={videos} setVideos={setVideos} />
      </section>
    </main>
  )
}

export default MainConts
