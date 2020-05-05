import React from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import NewsItem from '../components/NewsItem'
import LogsContainer from '../components/LogsContainer'
import photos from '../constants/NewsPhotos'
import './Home.css'
import video from '../assets/stockVideo.mp4'


export default class Home extends React.Component {
  // constructor () {
  //   super()
  //   this.state = { currentImage: 0 }
  //   this.closeLightbox = this.closeLightbox.bind(this)
  //   this.openLightbox = this.openLightbox.bind(this)
  //   this.gotoNext = this.gotoNext.bind(this)
  //   this.gotoPrevious = this.gotoPrevious.bind(this)
  // }
  //
  // openLightbox(event, obj) {
  //   this.setState({ currentImage: obj.index, lightboxIsOpen: true })
  // }
  //
  // closeLightbox() {
  //   this.setState({ currentImage: 0, lightboxIsOpen: false })
  // }
  //
  // gotoPrevious() {
  //   this.setState({ currentImage: this.state.currentImage - 1 })
  // }
  //
  // gotoNext() {
  //   this.setState({ currentImage: this.state.currentImage + 1 })
  // }
  //
  // render() {
  //   return (
  //     <div className='Home'>
  //       <div className='Home-body'>
  //         <div className='Home-logs'>
  //           <LogsContainer />
  //         </div>
  //         <div className='Home-news'>
  //           <Gallery photos={photos} margin={4} onClick={this.openLightbox} />
  //           <Lightbox images={photos} onClose={this.closeLightbox}
  //             onClickPrev={this.gotoPrevious} onClickNext={this.gotoNext}
  //             currentImage={this.state.currentImage}
  //             isOpen={this.state.lightboxIsOpen} />
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  render () {
    return (
      <div className='Home'>
        <video className='Home-video' src={video} muted autoPlay loop />
      </div>
    )
  }
}
