import React from 'react'
import BossItem from '../components/BossItem'
import bossPics from '../constants/BossPics'
import './Progression.css'

class Progression extends React.Component {
  constructor (props) {
    super(props)
    this.state = {bosses: [], name: ''}
  }

  componentDidMount () {
    this.getBosses().then(response => {
      const raids = JSON.parse(response).progression.raids
      const recentRaid = raids[raids.length - 1]
      const bosses = recentRaid.bosses
      const name = recentRaid.name
      this.setState({bosses, name})
    })
  }

  getBosses () {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open("GET", `https://us.api.battle.net/wow/character/Frostmane/Boltin?fields=progression&locale=en_US&apikey=c93sxduxdezc4axs5bnzjwv5w8a579ep`)
      xhr.onload = () => resolve(xhr.responseText)
      xhr.onerror = () => reject(xhr.statusText)
      xhr.send()
    })
  }

  getBossItems () {
    const {bosses} = this.state
    return bosses.map(boss => <BossItem key={boss.id} kills={boss.heroicKills} image={bossPics[boss.name]} />)
  }

  render() {
    const {name} = this.state
    return (
      <div className='Progression'>
        <div className='Progression-raid'>
          <h1 className='Progression-name'>{name}</h1>
        </div>
        <div className='Progression-bosses'>
          {this.getBossItems()}
        </div>
      </div>
    )
  }
}

export default Progression
