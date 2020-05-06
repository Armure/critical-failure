import React from 'react'
import achievementIcon from '../assets/achievement-icon.png'
import ilvlIcon from '../assets/ilvl-icon.png'
import './Member.css'

export default class Member extends React.Component {
  render () {
    const { character } = this.props
    const { name, imageUrl, achievements, ilvl, level, race, spec, characterClass } = character

    const link = this.getArmoryLink(character)
    const details = `${level} ${race} ${spec} ${characterClass}`

    return (
      <a className='Member' href={link} target='_blank'>
        <img className='Member-image' src={imageUrl} alt='character preview' />
        <div className='Member-info'>
          <div className='Member-info-top'>
            <img className='Member-icon' src={achievementIcon} alt='achievement icon' />
            <div className='Member-achievements'>{achievements}</div>
            <img className='Member-icon' src={ilvlIcon} alt='ilvl icon' />
            <div className='Member-ilvl'>{`${ilvl} ILVL`}</div>
          </div>
          <div className='Member-info-bottom'>
            { /* <div className='Member-title'>Brawler</div> */}
            <div className='Member-name'>{name.toUpperCase()}</div>
            <div className='Member-class'>{details}</div>
          </div>
        </div>
      </a>
    )
  }

  getArmoryLink (character) {
    const { name, realm } = character

    return `https://worldofwarcraft.com/en-us/character/${realm}/${name.toLowerCase()}`
  }
}
