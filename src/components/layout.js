import React from 'react'
import {Link} from 'gatsby'
import header from '../images/header.jpg'
import 'layout.css'

export default ({ children }) => (
  <div>
    <div>
      <img src={header} alt="Piano Lessons in Edinburgh!"/>
    </div>
    <nav id='nav-menu'>
      <Link className='nav-link' to='/' activeStyle={{ color: `hsl(357, 27%, 95%)`, }}>Home</Link>
      <Link className='nav-link' to='/classes/' activeStyle={{ color: `hsl(357, 27%, 95%)`, }}>Classes</Link>
      <Link className='nav-link' to='/prices/' activeStyle={{ color: `hsl(357, 27%, 95%)`, }}>Prices</Link>
      <Link className='nav-link' to='/testimonials/' activeStyle={{ color: `hsl(357, 27%, 95%)`, }}>Testimonials</Link>
      <Link className='nav-link' to='/media/' activeStyle={{ color: `hsl(357, 27%, 95%)`, }}>Photo-Video</Link>
      <Link className='nav-link' to='/contact/' activeStyle={{ color: `hsl(357, 27%, 95%)`, }}>Contact</Link>
      <Link className='nav-link' to='/about/' activeStyle={{ color: `hsl(357, 27%, 95%)`, }}>About</Link>
    </nav>
    { children }
    <nav id='nav-menu'>
      <Link className='nav-link' to='/' activeStyle={{ color: `hsl(357, 27%, 95%)`, }}>Home</Link>
      <Link className='nav-link' to='/classes/' activeStyle={{ color: `hsl(357, 27%, 95%)`, }}>Classes</Link>
      <Link className='nav-link' to='/prices/' activeStyle={{ color: `hsl(357, 27%, 95%)`, }}>Prices</Link>
      <Link className='nav-link' to='/testimonials/' activeStyle={{ color: `hsl(357, 27%, 95%)`, }}>Testimonials</Link>
      <Link className='nav-link' to='/media/' activeStyle={{ color: `hsl(357, 27%, 95%)`, }}>Photo-Video</Link>
      <Link className='nav-link' to='/contact/' activeStyle={{ color: `hsl(357, 27%, 95%)`, }}>Contact</Link>
      <Link className='nav-link' to='/about/' activeStyle={{ color: `hsl(357, 27%, 95%)`, }}>About</Link>
    </nav>
  </div>

)