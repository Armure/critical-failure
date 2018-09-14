import React from 'react'
import './LogsContainer.css'

const liveTag = `[LIVE]`

class LogsContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = { logs: null }
  }

  componentDidMount () {
    this.getLogs().then(response => {
      const json = JSON.parse(response)
      const logs = json
      this.setState({logs})
    })
  }

  getLogs () {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open("GET", `https://www.warcraftlogs.com:443/v1/reports/guild/Critical%20Failure/Frostmane/US?api_key=1c3e183678ca5ec16bc14b15ab41b5e3`)
      xhr.onload = () => resolve(xhr.responseText)
      xhr.onerror = () => reject(xhr.statusText)
      xhr.send()
    })
  }

  getLatestLog () {
    const { logs } = this.state
    if (!logs || !logs.length) return null
    const latestLog = logs[0]
    const date = new Date(latestLog.start)
    const link = `https://www.warcraftlogs.com/reports/${latestLog.id}`
    const live = latestLog.end === latestLog.start

    return (
      <a className='LogsContainer-latest' href={link} target='_blank'>
        <p className='LogsContainer-latest-title'>{latestLog.title}</p>
        <p className='LogsContainer-latest-date'>{`${date.toDateString()}`}</p>
        { live && <p className='LogsContainer-latest-live'>{liveTag}</p> }
      </a>
    )
  }

  render() {
    return (
      <div className='LogsContainer'>
        <p className='LogsContainer-title'>Latest Log</p>
        {this.getLatestLog()}
      </div>
    )
  }
}

export default LogsContainer
