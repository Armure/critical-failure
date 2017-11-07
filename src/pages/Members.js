import React from 'react'
import Member from '../components/Member'
import './Members.css'

const data = [
  {name: 'Atroce', role: 'dps', traitorRank: 1},
  {name: 'Boltin', role: 'dps', traitorRank: 1},
  {name: 'Spookieboogie', role: 'dps', traitorRank: 1},
  {name: 'Krompobulous', role: 'tank', traitorRank: 3}
]

class Members extends React.Component {
  getMembers () {
    return data.map(m => <Member key={m.name} name={m.name} role={m.role} rank={m.traitorRank} />)
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
