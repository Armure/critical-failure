import React from 'react'
import BossItem from '../components/BossItem'
import raids from '../constants/Raids'
import './Progression.css'

const expansionColors = {
  'Legion': '#245224',
  'Battle for Azeroth': '#22344e'
}

export default class Progression extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        { this.getRaids(raids.filter(({ expansion }) => expansion === 'Battle for Azeroth')) }
        { this.getRaids(raids.filter(({ expansion }) => expansion === 'Legion')) }
      </div>
    )
  }

  getRaids (filteredRaids) {
    return filteredRaids.map(({ name, bosses, expansion }) => {
      return (
        <div key={name} className='Progression'>
          <div className='Progression-raid'>
            <h1 className='Progression-name'>{name}</h1>
          </div>
          <div className='Progression-bosses'>
            { this.getBosses(bosses) }
          </div>
        </div>
      )
    })
  }

  getBosses (bosses) {
    return bosses.map(({ name, image, killed }) => {
      return <BossItem key={name} name={name} image={image} killed={killed} />
    })
  }
}
