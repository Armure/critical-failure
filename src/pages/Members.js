import React from 'react'
import Member from '../components/Member'
import roster from '../constants/Roster'
import './Members.css'

export default class Members extends React.Component {
  render() {
    return (
      <div className='Members'>
        {this.getMembers()}
      </div>
    )
  }

  getMembers () {
    const { data } = this.props
    if (!data) return null
    return roster.map(({ name, role, traitorRank }, idx) => {
      const character = data.find(character => character.name === name)
      return <Member key={idx} character={character} name={name} role={role} rank={traitorRank} />
    })
  }
}
