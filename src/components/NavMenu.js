import React from 'react'
import Logo from './Logo'
import PageLinks from './PageLinks'
import './NavMenu.css'

export default class NavMenu extends React.Component {
  render () {
    return (
      <div className='NavMenu'>
        <Logo />
        <PageLinks />
      </div>
    )
  }
}
