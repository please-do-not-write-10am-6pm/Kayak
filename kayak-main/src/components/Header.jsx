import React from 'react'
import '../styles/header.css'
import logo from '../logo.svg'

export default function Header() {
  return (
    <div className="App-header">
      <img src={logo} className="logo" alt="logo" />
    </div>
  )
}
