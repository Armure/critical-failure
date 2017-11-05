import React from 'react'
import './NewsItem.css'

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

  getColor (quality) {

  }

  render() {
    const {item} = this.props
    const {info} = this.state
    console.log(info)
    const date = new Date(item.timestamp)

    return (
      <div className='NewsItem'>
        <p className='NewsItem-info' style={{textAlign: 'left', width: '33%'}}>{`${item.character}`}</p>
        {info && <a className='NewsItem-item' style={{textAlign: 'center', width: '33%'}} href={`http://www.wowhead.com/item=${info.id}`}>{`${info.name}`}</a>}
        <p style={{textAlign: 'right', width: '33%'}}>{`${date.toDateString()}`}</p>
      </div>
    )
  }
}

export default NewsItem
