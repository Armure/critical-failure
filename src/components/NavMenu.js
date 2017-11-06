import React from 'react'
import { Link } from 'react-router-dom'
import './NavMenu.css'

export default class NavMenu extends React.Component {
  render () {
    return (
      <div className='NavMenu'>
        <Link className='NavMenu-item' to='members'>
          Members
        </Link>
        <h1 className='NavMenu-item'>
          Progression
        </h1>
        <h1 className='NavMenu-item'>
          Contact
        </h1>
      </div>
    )
  }
}
