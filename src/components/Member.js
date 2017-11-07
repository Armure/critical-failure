import React from 'react'
import './Member.css'

export default class Member extends React.Component {
  render () {
    const {name, role, rank} = this.props
    const image = 'https://render-us.worldofwarcraft.com/character/frostmane/240/42610672-main.jpg'
    return (
      <div className='Member' style={{backgroundImage: `url(${image})`}}>
        <div className='Member-name'>{name}</div>
        <div className='Member-name'>{role}</div>
        <div className='Member-name'>{rank}</div>
      </div>
    )
  }
}
