import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Members from './pages/Members'
import NavMenu from './components/NavMenu'
import logo from './assets/guild_logo_white.svg'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Link className='App-name' to='/'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1 className='App-title'>Critical Failure</h1>
          </Link>
        </header>
        <NavMenu />
        <Route exact path='/' component={Home} />
        <Route exact path='/members' component={Members} />
      </div>
    )
  }
}

export default App
