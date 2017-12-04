import React from 'react'
import { Link } from 'react-router-dom'
import './NavMenu.css'

export default class NavMenu extends React.Component {
  render () {
    return (
      <div className='NavMenu'>
        <Link className='NavMenu-item' to='/'>
          Home
        </Link>
        <Link className='NavMenu-item' to='raiders'>
          Raiders
        </Link>
        <Link className='NavMenu-item' to='progression'>
          Progression
        </Link>
      </div>
    )
  }
}
