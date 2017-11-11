import React from 'react'
import heroicIcon from '../assets/heroic-icon.png'
import bossPics from '../constants/BossPics'
import './BossItem.css'

export default class BossItem extends React.Component {
  render () {
    const {name, kills} = this.props
    const image = bossPics[name]
    const killed = kills > 0
    const imageClass = killed ? 'Boss-image Boss-killed' : 'Boss-image'
    return (
      <a className='Boss'>
        <div className='Boss-image-container'>
          <div className='Boss-difficulty'>
            {killed && <img className='Boss-difficulty-badge' src={heroicIcon} alt='Heroic' />}
          </div>
          <img className={imageClass} src={image} alt={name} />
        </div>
      </a>
    )
  }
}
