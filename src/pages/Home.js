import React from 'react'
import NewsItem from '../components/NewsItem'
import LogsContainer from '../components/LogsContainer'
import './Home.css'

class Home extends React.Component {
  getItems () {
    const {news, members} = this.props
    if (!news || !members) return null
    const items = news.filter(single => single.type === 'itemLoot')
    items.length = 10
    return items.map(item => {
      const character = this.getCharacter(item.character)
      return <NewsItem key={`${item.character}: ${item.timestamp * item.itemId}`} item={item} character={character} />
    })
  }

  getCharacter (name) {
    const {members} = this.props
    const member = members.filter(member => member.name === name)[0]
    return member
  }

  render() {
    return (
      <div className='Home'>
        <div className='Home-body'>
          <div className='Home-loot'>
            {this.getItems()}
          </div>
          <div className='Home-logs'>
            <LogsContainer />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
