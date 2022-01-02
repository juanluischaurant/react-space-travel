import React, { useState } from 'react'
import './Navbar.css'
import Hamburger from 'hamburger-react'
import {NavLink} from 'react-router-dom'
// import { ReactComponentElement as Logo } from '/./assets/shared/logo1.svg'
// import {ReactComponent as MyLogo } from '../../../public/assets/shared/Logo.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className='primary-header flex'>
      
      <div>
        {/* <MyLogo/> */}
        <div>
          <img src="/assets/favicon-32x32.png" alt="" />
        </div>
      </div>

      <nav className='nav-container'>
        
        <ul 
          className='primary-navigation underline-indicators'
        >
          <li className="nav-link">
            <NavLink
              activeClassName="active"
              className={`ff-sans-cond uppercase text-white letter-spacing-2`}
              to='/' 
              >
              <span>00</span>Home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink 
              activeClassName="active"
              className={`ff-sans-cond uppercase text-white letter-spacing-2`}
              to='/destinations'
            >
              <span>01</span>Destination
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink 
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to='/crew'
            >
              <span>02</span>Crew
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink className="ff-sans-cond uppercase text-white letter-spacing-2"
            to='/technology'
            >
              <span>03</span>Technology
            </NavLink>
          </li>

        </ul>

        <Hamburger 
          className='hamburger-react' 
          direction='right'
          onToggle={(toggle)=>toggle?setIsOpen(true):setIsOpen(false)}
        />
      </nav>

      <div className={`${isOpen?'':'responsive-menu--opened'} responsive-menu`}>
        <ul>
          <li>
            <NavLink
              activeClassName="active"
              className={`ff-sans-cond uppercase text-white letter-spacing-2`}
              to='/' 
              >
              <span>00</span>Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              activeClassName="active"
              className={`ff-sans-cond uppercase text-white letter-spacing-2`}
              to='/destinations'
            >
              <span>01</span>Destination
            </NavLink>
          </li>
          <li>
            <NavLink 
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              to='/crew'
            >
              <span>02</span>Crew
            </NavLink>
          </li>
          <li>
            <NavLink className="ff-sans-cond uppercase text-white letter-spacing-2"
              to='/technology'
              >
              <span>03</span>Technology
            </NavLink>
          </li>

        </ul>
      </div>
    </section>
  )
}

export default Navbar
