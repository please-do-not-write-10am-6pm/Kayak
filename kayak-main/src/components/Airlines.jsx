import React, { useState, useEffect } from 'react'
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'

import Airline from './Airline'
import Loader from './Loader'
import Button from './Button'

import '../styles/airlines.css'

export default function Airlines({ filters }) {
  const [airlines, setAirlines] = useState([])
  const [increment, setIncrement] = useState(9)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios({
      url: 'http://kayak.com/h/mobileapis/directory/airlines/homework',
      adapter: jsonpAdapter,
      callbackParamName: 'jsonp',
    }).then((res) => {
      setAirlines(res.data)
      setLoading(false)
    })
  }, [])

  const loadMore = () => setIncrement((prev) => prev + 9)

  const filterBy = (airline) => {
    return filters.length > 0 ? filters.includes(airline.alliance) : true
  }
  const filteredAirlines = airlines.filter(filterBy)

  const displayedAirlines = filteredAirlines.slice(0, increment)

  return (
    <>
      <div className="airlines-container">
        {loading && <Loader />}
        {displayedAirlines.map((airline, id) => (
          <Airline key={id} airline={airline} />
        ))}
      </div>
      {!loading && <Button label="Load More" loadMore={loadMore} />}
    </>
  )
}
