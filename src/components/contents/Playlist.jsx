import React from 'react'

import {playlistText} from '../../data/playlist'
import { Link } from 'react-router-dom'

const Playlist = () => {
    return (
      <section id='playlist'>
          <h2>상황에 맞는 플레이리스트를 골라보세요!</h2>
          <div className="video__inner">
              {playlistText.map((video, key)=>(
                  <div className="video" key={key}>
                      <div className="video__thumb">
                          <Link to={`/video/${video.videoId}`}>
                              <img src={video.img} alt={video.title} />
                          </Link>
                      </div>
                  </div>
              ))}
          </div>
      </section>
    )
}

export default Playlist