import React from 'react'
import Logo from './Logo'
import PageLinks from './PageLinks'
import './NavMenu.css'

export default class NavMenu extends React.Component {
  constructor () {
    super()

    this.state = {
      scrolled: false
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    const { scrolled } = this.state
    if (window.scrollY > 0 && !scrolled) this.setState({ scrolled: true })
    else if (window.scrollY <= 0 && scrolled) this.setState({ scrolled: false })
  }

  render () {
    const { scrolled } = this.state
    const className = scrolled ? 'NavMenu NavMenu-scrolled' : 'NavMenu'
    return (
      <div className={className}>
        <Logo />
        <PageLinks />
      </div>
    )
  }
}
