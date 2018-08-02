import React from 'react'
import NewsItem from '../components/NewsItem'
import LogsContainer from '../components/LogsContainer'
import ste from '../assets/ste.jpg'
import './About.css'

export default class About extends React.Component {
  render() {
    return (
      <div className='Home'>
        <div className='Home-body'>
          <div className='Home-loot'>
            <NewsItem />
            <div style={{backgroundImage: `url(${ste})`, width: '300px', height: '300px', backgroundSize: 'cover'}} />
          </div>
          <div className='Home-logs'>
            <LogsContainer />
          </div>
        </div>
      </div>
    )
  }
}
