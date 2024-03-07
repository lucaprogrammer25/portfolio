import React from 'react'
import Project from './Project'
import scrollToSection from '../features/scrollToSection'
import { Link } from 'react-router-dom'
import scrollUp from '../features/scrollUp'

const Navbar = () => {
  
  return (
    <nav>
        <div className='item' onClick={scrollUp}> <Link to="/">Home</Link></div>
        <div className='item' onClick={() => scrollToSection('project')}><Link to="/">Project</Link></div>
        <div className='item'><Link to="/contact">Contact</Link></div>
        
    </nav>
  )
}

export default Navbar