import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Members from './pages/Members'
import Progression from './pages/Progression'
import NavMenu from './components/NavMenu'
import logo from './assets/guild_logo_white.svg'
import './App.css'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { news: null, members: null }
  }

  componentDidMount () {
    this.getGuild()
    .then(response => {
      const json = JSON.parse(response)
      const news = json.news
      const members = json.members.map(member => member.character)
      this.setState({news, members})
    })
    .catch(err => console.error(err))
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
    const { members } = this.state
    return (
      <div className='App'>
        <header className='App-header'>
          <div className='App-background'>
            <div className='App-overlay' />
          </div>
          <Link className='App-name' to='/'>
            <h1 className='App-title'>
              Critical <img src={logo} className='App-logo' alt='logo' /> Failure
            </h1>
          </Link>
          <NavMenu />
        </header>
        <Route exact path='/' component={() => <Home />} />
        <Route path='/raiders' component={() => <Members data={members} />} />
        <Route path='/progression' component={() => <Progression />} />
      </div>
    )
  }
}
