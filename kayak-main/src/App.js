import React, { useState } from 'react'
import Header from './components/Header.jsx'
import Title from './components/Title'
import Filter from './components/Filter'
import Airlines from './components/Airlines'
import './App.css'

function App() {
  const [filters, setFilters] = useState([])
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Title />
        <Filter setFilters={setFilters} />
        <Airlines filters={filters} />
      </div>
    </div>
  )
}

export default App
