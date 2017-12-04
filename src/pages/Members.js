import React from 'react'
import Member from '../components/Member'
import './Members.css'

const list = [
  {name: 'Atroce', role: 'dps', traitorRank: 1},
  {name: 'Boltin', role: 'dps', traitorRank: 1},
  {name: 'Blackfoxrun', role: 'dps', traitorRank: 2},
  {name: 'Fuusan', role: 'dps', traitorRank: 1},
  {name: 'Krazeturtle', role: 'dps', traitorRank: 5},
  {name: 'Krombôpulos', role: 'tank', traitorRank: 3},
  {name: 'Nemure', role: 'healer', traitorRank: 1},
  {name: 'Papie', role: 'healer', traitorRank: 1},
  {name: 'Rosty', role: 'dps', traitorRank: 1},
  {name: 'Spookyboogie', role: 'dps', traitorRank: 1},
  {name: 'Virb', role: 'dps', traitorRank: 1},
  {name: 'Wesleh', role: 'tank', traitorRank: 2},
  {name: 'Zealnin', role: 'dps', traitorRank: 1}
]

class Members extends React.Component {
  getMembers () {
    const {data} = this.props
    if (!data) return null
    return list.map(m => {
      const character = data.filter(c => c.name === m.name)[0]
      return <Member key={m.name} character={character} name={m.name} role={m.role} rank={m.traitorRank} />
    })
  }

  render() {
    return (
      <div className='Members'>
        {this.getMembers()}
      </div>
    )
  }
}

export default Members
