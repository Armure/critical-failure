import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Logo.css'

export default class Logo extends React.Component {
  render () {
    return (
      <Link className='Logo' to='/'>
        <img src={logo} className='Logo-image' alt='' />
        CRITICAL FAILURE
      </Link>
    )
  }
}
