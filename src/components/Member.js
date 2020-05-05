import React from 'react'
import rolePics from '../constants/RolePics'
import achievementIcon from '../assets/achievement-icon.png'
import ilvlIcon from '../assets/ilvl-icon.png'
import './Member.css'

const classColors = [
  '#AAAAAA', '#C79C6E', '#F58CBA', '#ABD473', '#FFF569',
  '#FFFFFF', '#C41F3B', '#0070DE', '#69CCF0', '#9482C9',
  '#00FF96', '#FF7D0A', '#A330C9'
]
const fallbackUrl = 'https://render-us.worldofwarcraft.com/character/frostmane/112/86090352-main.jpg'

export default class Member extends React.Component {
  render () {
    const { character } = this.props
    const { name, imageUrl } = character
    const link = this.getArmoryLink(character)

    return (
      <a className='Member' href={link} target='_blank'>
        <img className='Member-image' src={imageUrl || fallbackUrl} />
        <div className='Member-info'>
          <div className='Member-info-top'>
            <img className='Member-icon' src={achievementIcon} />
            <div className='Member-achievements'>14950</div>
            <img className='Member-icon' src={ilvlIcon} />
            <div className='Member-ilvl'>367 ILVL</div>
          </div>
          <div className='Member-info-bottom'>
            <div className='Member-title'>Brawler</div>
            <div className='Member-name'>{name.toUpperCase()}</div>
            <div className='Member-class'>120 Undead Assassination Rogue</div>
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
