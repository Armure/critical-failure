import React from 'react'
import Member from '../components/Member'
import './Members.css'

const members = [
  {name: 'Atroce', role: 'dps', traitorRank: 1},
  {name: 'Boltin', role: 'dps', traitorRank: 1},
  {name: 'Blackfoxrun', role: 'dps', traitorRank: 3},
  {name: 'Fuusan', role: 'dps', traitorRank: 1},
  {name: 'Oikawa', role: 'tank', traitorRank: 3},
  {name: 'Krombôpulos', role: 'tank', traitorRank: 2},
  {name: 'Nemure', role: 'healer', traitorRank: 1},
  {name: 'Papie', role: 'healer', traitorRank: 1},
  {name: 'Rosty', role: 'dps', traitorRank: 1, realm: 'Frostmane'},
  {name: 'Spookyboogie', role: 'dps', traitorRank: 1},
  {name: 'Virb', role: 'dps', traitorRank: 1},
  {name: 'Wesleh', role: 'tank', traitorRank: 2},
  {name: 'Zealnin', role: 'dps', traitorRank: 1}
]

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
    return members.map(({ name, role, traitorRank }, idx) => {
      const character = data.find(character => character.name === name)
      return <Member key={idx} character={character} name={name} role={role} rank={traitorRank} />
    })
  }
}
