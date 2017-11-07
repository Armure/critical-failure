import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Members from './pages/Members'
import NavMenu from './components/NavMenu'
import logo from './assets/guild_logo_white.svg'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {news: null, members: null}
  }

  componentDidMount () {
    this.getGuild().then(response => {
      const json = JSON.parse(response)
      const news = json.news
      const members = json.members.map(member => member.character)
      this.setState({news, members})
    })
  }

  getGuild () {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open("GET", `https://us.api.battle.net/wow/guild/Frostmane/Critical%20Failure?fields=news%2C+members&locale=en_US&apikey=c93sxduxdezc4axs5bnzjwv5w8a579ep`)
      xhr.onload = () => resolve(xhr.responseText)
      xhr.onerror = () => reject(xhr.statusText)
      xhr.send()
    })
  }

  render() {
    const {news, members} = this.state
    return (
      <div className='App'>
        <header className='App-header'>
          <Link className='App-name' to='/'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1 className='App-title'>Critical Failure</h1>
          </Link>
        </header>
        <NavMenu />
        <Route exact path='/' component={() => <Home news={news} members={members} />} />
        <Route path='/raiders' component={() => <Members data={members} />} />
      </div>
    )
  }
}

export default App
