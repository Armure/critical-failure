import React from 'react'
import { Link } from 'react-router-dom'
import './PageLinks.css'

export default class PageLinks extends React.Component {
  render () {
    return (
      <div className='PageLinks'>
        <Link className='PageLinks-item' to='about'>
          ABOUT
        </Link>
        <Link className='PageLinks-item' to='raiders'>
          RAIDERS
        </Link>
        <Link className='PageLinks-item' to='progression'>
          PROGRESSION
        </Link>
      </div>
    )
  }
}
