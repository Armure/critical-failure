import React from 'react'
import Member from '../components/Member'
import './Members.css'

export default class Members extends React.Component {
  render() {
    return (
      <div className='Members'>
        <div className='Members-body'>
          <div className='Members-title'>RAIDERS</div>
        </div>
        <div className='Members-list'>
          { this.getMembers() }
        </div>
      </div>
    )
  }

  getMembers () {
    const { data } = this.props
    if (!data) return null

    return data.map((character, idx) => {
      return <Member key={idx} character={character} />
    })
  }
}
