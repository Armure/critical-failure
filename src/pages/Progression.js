import React from 'react'
// import BossItem from '../components/BossItem'
import './Progression.css'

class Progression extends React.Component {
  constructor (props) {
    super(props)
    this.state = {bosses: null}
  }

  componentDidMount () {
    this.getBosses().then(response => {
      const raids = JSON.parse(response).progression.raids
      const recentRaid = raids[raids.length - 1]
      const bosses = recentRaid.bosses
      console.log(bosses)
      this.setState({bosses})
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

  render() {
    return (
      <div className='Members'>
      </div>
    )
  }
}

export default Progression
