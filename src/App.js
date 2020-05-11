import React from 'react'
import { Route } from 'react-router-dom'
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
    fetch('https://pacific-stream-55011.herokuapp.com/token')
    .then(response => response.json())
    .then(({ token }) => {
      this.getGuild(token)
      .then(guild => {
        const validCharacters = roster.reduce((acc, entry, idx) => {
          const { name, fallback } = entry
          const member = guild.members.find(({ character }) => character.name === name)
          if (member) {
            member.character.fallback = fallback
            acc.push(member.character)
          }
          return acc
        }, [])

        const characterInfoPromises = validCharacters.map((character, idx) => {
          return this.getCharacterInfo(token, character)
        })

        return Promise.all(characterInfoPromises)
      })
      .then(members => {
        this.setState({ members })
      })
      .catch(err => console.error(err))
    })
  }

  getCharacterInfo (token, character) {
    const { name, realm, fallback } = character
    const { slug } = realm

    return fetch(`https://us.api.blizzard.com/profile/wow/character/${slug}/${name.toLowerCase()}/character-media?namespace=profile-us&locale=en_US&access_token=${token}`)
    .then(response => {
      if (!response.ok) return { render_url: fallback.imageUrl }
      return response.json()
    })
    .then(({ render_url: imageUrl }) => {
      return fetch(`https://us.api.blizzard.com/profile/wow/character/${slug}/${name.toLowerCase()}?namespace=profile-us&locale=en_US&access_token=${token}`)
      .then(response => {
        if (!response.ok) return { achievement_points: fallback.achievements, equipped_item_level: fallback.ilvl, level: fallback.level, race: { name: fallback.race }, character_class: { name: fallback.characterClass }, active_spec: { name: fallback.spec }, active_title: {} }
        return response.json()
      })
      .then((info) => {
        const { achievement_points: achievements, equipped_item_level: ilvl, race, character_class: characterClass, level, active_spec: spec, active_title: title } = info
        return { name, realm: slug, imageUrl, achievements, ilvl, level, race: race.name, characterClass: characterClass.name, spec: spec.name, title }
      })
    })
  }

  getGuild (token) {
    return fetch(`https://us.api.blizzard.com/data/wow/guild/frostmane/critical-failure/roster?namespace=profile-us&access_token=${token}`)
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
