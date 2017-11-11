import React from 'react'
import rolePics from '../constants/RolePics'
import './Member.css'

const classColors = [
  '#AAAAAA', '#C79C6E', '#F58CBA', '#ABD473', '#FFF569',
  '#FFFFFF', '#C41F3B', '#0070DE', '#69CCF0', '#9482C9',
  '#00FF96', '#FF7D0A', '#A330C9'
]

export default class Member extends React.Component {
  getArmoryLink (realm, name) {
    const trimmedRealm = realm.replace(/[^0-9a-z]/gi, '')
    return `https://worldofwarcraft.com/en-us/character/${trimmedRealm.toLowerCase()}/${name.toLowerCase()}`
  }

  render () {
    const {name, role, rank, character} = this.props
    const roleImage = rolePics[role]
    const main = character.thumbnail.replace(/avatar/gi, 'main')
    const image = `https://render-us.worldofwarcraft.com/character/${main}`
    const link = this.getArmoryLink(character.realm, character.name)
    return (
      <a className='Member' href={link} target='_blank'>
        <div className='Member-image-container'>
          <img className='Member-role' src={roleImage} alt={role} />
          <div className='Member-image' style={{backgroundImage: `url(${image})`}} />
        </div>
        <div className='Member-info'>
          <p className='Member-info-text' style={{color: classColors[character.class]}}>{name}</p>
          <p className='Member-info-text'>{`Traitor Score: ${rank}`}</p>
        </div>
      </a>
    )
  }
}
