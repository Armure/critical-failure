import React from 'react'
import NewsItem from './NewsItem'
import logo from './guild_logo_white.svg'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {news: null}
  }

  componentDidMount () {
    this.getNews().then(response => {
      const json = JSON.parse(response)
      const news = json.news
      this.setState({news})
    })
  }

  getNews () {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open("GET", `https://us.api.battle.net/wow/guild/Frostmane/Critical%20Failure?fields=news&locale=en_US&apikey=c93sxduxdezc4axs5bnzjwv5w8a579ep`)
      xhr.onload = () => resolve(xhr.responseText)
      xhr.onerror = () => reject(xhr.statusText)
      xhr.send()
    })
  }

  getItems () {
    const {news} = this.state
    if (!news) return null
    const items = news.filter(single => single.type === 'itemLoot')
    items.length = 10
    return items.map(item => <NewsItem key={`${item.character}: ${item.timestamp * item.itemId}`} item={item} />)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Critical Failure</h1>
        </header>
        <div className="App-intro">
          {this.getItems()}
        </div>
      </div>
    )
  }
}

export default App
