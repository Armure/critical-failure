import React from 'react'
import NewsItem from '../components/NewsItem'
import LogsContainer from '../components/LogsContainer'
import ste from '../assets/ste.jpg'
import news1 from '../assets/news/news1.jpg'
import news2 from '../assets/news/news2.jpg'
import './About.css'

export default class About extends React.Component {
  render() {
    return (
      <div className='Home'>
        <div className='Home-body'>
          <div className='Home-loot'>
            <NewsItem />
            <div style={{flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
              <div className='News-photo' style={{backgroundImage: `url(${news2})`, width: '650px', height: '375px', backgroundSize: 'cover'}} />
              <div className='News-photo' style={{backgroundImage: `url(${news1})`, width: '650px', height: '375px', backgroundSize: 'cover'}} />
              <div className='News-photo' style={{backgroundImage: `url(${ste})`, width: '300px', height: '300px', backgroundSize: 'cover'}} />
            </div>
          </div>
          <div className='Home-logs'>
            <LogsContainer />
          </div>
        </div>
      </div>
    )
  }
}
