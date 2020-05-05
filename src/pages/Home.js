import React from 'react'
import video from '../assets/stockVideo.mp4'
import './Home.css'

export default class Home extends React.Component {
  render () {
    return (
      <div className='Home'>
        <video className='Home-video' src={video} muted autoPlay loop />
      </div>
    )
  }
}
