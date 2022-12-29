import React, { useState } from 'react'
import MoreInfo from './MoreInfo'
import '../styles/airline.css'

export default function Airline({ airline }) {
  const [displayMoreInfo, setDisplayMoreInfo] = useState(false)
  return (
    <div
      className="airline-tile"
      onMouseEnter={() => setDisplayMoreInfo(true)}
      onMouseLeave={() => setDisplayMoreInfo(false)}>
      <img src={'https://kayak.com' + airline.logoURL} className="tile-img" alt={airline.site} />
      <div className="tile-info">
        <h1 className="info-title">{airline.name}</h1>
        {displayMoreInfo && <MoreInfo airline={airline} />}
      </div>
    </div>
  )
}
