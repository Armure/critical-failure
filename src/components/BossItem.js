import React from 'react'
import heroicIcon from '../assets/heroic-icon.png'
import placeholder from '../assets/bosses/boss_placeholder.jpg'
import './BossItem.css'

export default class BossItem extends React.Component {
  render () {
    const { name, killed, image } = this.props
    const imageClass = killed.normal ? 'Boss-image Boss-killed' : 'Boss-image'
    return (
      <a className='Boss'>
        <div className='Boss-image-container'>
          <div className='Boss-difficulty'>
            { killed.heroic && <img className='Boss-difficulty-badge' src={heroicIcon} alt='Heroic' /> }
          </div>
          <img className={imageClass} src={image || placeholder} alt={name} />
        </div>
      </a>
    )
  }
}
