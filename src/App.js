import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Members from './pages/Members'
import Progression from './pages/Progression'
import NavMenu from './components/NavMenu'
import roster from './constants/Roster'
import './App.css'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { members: null }
  }

  componentDidMount () {
    this.getGuild()
    .then(guild => {
      const validCharacters = roster.reduce((acc, { name }, idx) => {
        const member = guild.members.find(({ character }) => character.name === name)
        if (member) acc.push(member.character)
        return acc
      }, [])
      console.log(validCharacters)

      const characterInfoPromises = validCharacters.map((character, idx) => {
        return this.getCharacterInfo(character)
      })

      return Promise.all(characterInfoPromises)
    })
    .then(members => {
      this.setState({ members })
    })
    .catch(err => console.error(err))
  }

  getCharacterInfo (character) {
    const { name, realm } = character
    const { slug } = realm

    return fetch(`https://us.api.blizzard.com/profile/wow/character/${slug}/${name.toLowerCase()}/character-media?namespace=profile-us&locale=en_US&access_token=US8VXpx7FkT7KHimabXnBISHVqdrLaY5tl`)
    .then(response => response.json())
    .then(({ render_url: imageUrl }) => ({ name, realm: slug, imageUrl }))
  }

  getGuild () {
    return fetch('https://us.api.blizzard.com/data/wow/guild/frostmane/critical-failure/roster?namespace=profile-us&access_token=US8VXpx7FkT7KHimabXnBISHVqdrLaY5tl')
    .then(response => response.json())
  }

  render() {
    const { members } = this.state
    return (
      <div className='App'>
        <NavMenu />
        <div className='App-page'>
          <Route exact path='/' component={() => <Home />} />
          <Route path='/about' component={() => <About />} />
          <Route path='/raiders' component={() => <Members data={members} />} />
          <Route path='/progression' component={() => <Progression />} />
        </div>
      </div>
    )
  }
}
