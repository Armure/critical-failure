import React from 'react'
import './NewsItem.css'

class NewsItem extends React.Component {
  render() {
    const { text = '' } = this.props
    return (
      <div className='NewsItem'>
        { this.getNewsPhoto() }
        { text }
      </div>
    )
  }

  getNewsPhoto () {
    const { image, width, height } = this.props
    if (!image) return null
    const style = {
      background: `url(${image}) no-repeat`,
      backgroundSize: 'contain',
      width,
      height,
    }
    return <div className='News-photo' style={style} />
  }
}

export default NewsItem
