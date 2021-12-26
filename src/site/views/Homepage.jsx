import React from 'react'
import Navbar from '../components/Navbar'
import './Homepage.css'

const Homepage = () => {
  return (
    <div className='homepage__container'>
        
      <Navbar/>

      <div className="flex even-columns flex-container flex-container--home">
        <div className="">
          <h1 className='text-accent fs-500 ff-sans-cond uppercase letter-spacing-1'>So, you want to travel to 
          <span className='fs-900 ff-serif text-white block-element'>Space</span>
          </h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience! </p>
        </div>

        <div
        className='large-button--container'
          // style={{display:'flex', justifyContent:'flex-end'}}
        >
          <a href="#" className="large-button uppercase ff-serif fs-600 text-dark bg-white">Explore</a>
        </div>

      </div>
    </div>
  )
}

export default Homepage