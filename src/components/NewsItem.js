import React from 'react'
import './NewsItem.css'

const classColors = [
  '#AAAAAA', '#C79C6E', '#F58CBA', '#ABD473', '#FFF569',
  '#FFFFFF', '#C41F3B', '#0070DE', '#69CCF0', '#9482C9',
  '#00FF96', '#FF7D0A', '#A330C9'
]

class NewsItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {info: null}
  }

  componentDidMount () {
    const {item} = this.props
    this.getItemInfo(item.itemId).then(response => {
      const info = JSON.parse(response)
      this.setState({info})
    })
  }

  getItemInfo (id) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open("GET", `https://us.api.battle.net/wow/item/${id}?locale=en_US&apikey=c93sxduxdezc4axs5bnzjwv5w8a579ep`)
      xhr.onload = () => resolve(xhr.responseText)
      xhr.onerror = () => reject(xhr.statusText)
      xhr.send()
    })
  }

  getArmoryLink (realm, name) {
    const trimmedRealm = realm.replace(/[^0-9a-z]/gi, '')
    return `https://worldofwarcraft.com/en-us/character/${trimmedRealm.toLowerCase()}/${name.toLowerCase()}`
  }

  render() {
    const {item, character} = this.props
    const {info} = this.state
    if (!info) return null

    const date = new Date(item.timestamp)
    const color = classColors[character.class]
    const armoryLink = this.getArmoryLink(character.realm, character.name)
    const itemLink = `http://www.wowhead.com/item=${info.id}`

    return (
      <div className='NewsItem'>
        <a className='NewsItem-info' style={{textAlign: 'left', width: '33%', color: color}} href={armoryLink} target='_blank'>{`${item.character}`}</a>
        <a className='NewsItem-item' style={{textAlign: 'center', width: '33%'}} href={itemLink} target='_blank'>{`${info.name}`}</a>
        <p style={{textAlign: 'right', width: '33%'}}>{`${date.toDateString()}`}</p>
      </div>
    )
  }
}

export default NewsItem
