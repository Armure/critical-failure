import React from 'react'
import NewsItem from '../components/NewsItem'
import LogsContainer from '../components/LogsContainer'
import ste from '../assets/ste.jpg'
import news1 from '../assets/news/news1.jpg'
import news2 from '../assets/news/news2.jpg'
import './Home.css'

const items = [
  { text: `Welcome to the home of Critical Failure!` },
  { image: news2, width: 650, height: 375 },
  { image: news1, width: 650, height: 375 },
  { image: ste, width: 296, height: 400 },
]

export default class Home extends React.Component {
  render() {
    return (
      <div className='Home'>
        <div className='Home-body'>
          <div className='Home-loot'>
            { items.map((props, idx) => <NewsItem key={idx} {...props} />) }
          </div>
          <div className='Home-logs'>
            <LogsContainer />
          </div>
        </div>
      </div>
    )
  }
}
