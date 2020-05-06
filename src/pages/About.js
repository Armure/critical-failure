import React from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import photos from '../constants/NewsPhotos'
import './About.css'

export default class About extends React.Component {
  constructor () {
    super()
    this.state = { currentImage: 0 }
    this.closeLightbox = this.closeLightbox.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
  }

  openLightbox(event, obj) {
    this.setState({ currentImage: obj.index, lightboxIsOpen: true })
  }

  closeLightbox() {
    this.setState({ currentImage: 0, lightboxIsOpen: false })
  }

  gotoPrevious() {
    this.setState({ currentImage: this.state.currentImage - 1 })
  }

  gotoNext() {
    this.setState({ currentImage: this.state.currentImage + 1 })
  }

  render() {
    return (
      <div className='About'>
        <div className='About-body'>
          <div className='About-text'>
            <div className='About-title'>ABOUT</div>
            <div className='About-content'>
              Critical Failure is a World of Warcraft guild based on Frostmane US.
              Our main goal is to raid at a high skill level on a casual
              schedule. This requires a group of talented, like-minded players,
              which we have been lucky enough to maintain for several expansions.
              Although we have ceased raiding for the forseeable future, we are
              proud of our past accomplishments, and still have several active
              members.
            </div>
          </div>
        </div>
        <div className='About-photos'>
          <Gallery
            photos={photos}
            margin={4}
            onClick={this.openLightbox}
          />
          <Lightbox
            images={photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />
        </div>
      </div>
    )
  }
}
