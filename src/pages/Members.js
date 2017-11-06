import React from 'react'
import Member from '../components/Member'
import './Members.css'

class Members extends React.Component {
  render() {
    return (
      <div className='Members'>
        <Member />
        <Member />
        <Member />
        <Member />
      </div>
    )
  }
}

export default Members
