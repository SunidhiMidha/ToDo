import React from 'react'
import { Link } from 'react-router-dom'

function Layout() {
  return (
    <header style={headerStyle}>
        <h1>ToDo List</h1>
        <Link to="/" style={linkStyle}>Home </Link> | 
        <Link to="/about" style={linkStyle}> About</Link>
    </header>
  )
}

const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
  color: '#fff'
}

export default Layout