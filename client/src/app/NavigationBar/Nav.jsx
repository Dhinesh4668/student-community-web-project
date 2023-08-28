import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <nav className='container'>
        <div className='left-container'>
            <Link to='/'>Student <span>studeyPlace</span></Link>
        </div>
        <div className='right-container'>
            <Link to='/' style={{paddingRight: '15px'}}>Home</Link>
            <Link to='/meet' style={{paddingRight: '15px'}}>Meeting</Link>
            <Link to='/notes' style={{paddingRight: '15px'}}>Notes</Link>
            <Link to='/mail' style={{paddingRight: '15px'}}>Mail</Link>
        </div>
    </nav>
  )
}

export default Nav