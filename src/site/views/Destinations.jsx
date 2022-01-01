import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import './Destinations.css'
import data from '../data.json'

const Destinations = () => {
  
  const [destinationTab,setDestinationTab]=useState(0);

  useEffect(()=>{
    
    setDestinationTab(0)
    // console.log(data)
  },[])


  return (
    <div className='destination-container'>
      <Navbar/>

      <div className="destination-gadget">
        <div className="destination-gadget--inner">

          <div className='destination-header'>
            <h1
              className='text-white fs-300 ff-sans-cond uppercase letter-spacing-1'
            ><span>01</span> Pick your destination</h1>
            <img 
              // react automatically interprets the route
              src={data.destinations[destinationTab].images.png} 
              alt="" srcset="" 
            />
          </div>

          <div className="destination-body">
            <div className="destination-tabs">
              {
                data.destinations.map((el, index) => {
                  return (
                    <div
                      className={`destination-tab uppercase ${index===destinationTab?'dirty':''}`}
                      onClick={()=>setDestinationTab(index)}
                    >{el.name}</div>
                  )
                })
              }
            </div>
            {
              data.destinations.map((el, index)=>{
                return(
                  <div
                    // style={{display:}}
                    className={index===destinationTab?'show':'hide'}
                  >
                    <h1 className='fs-800 ff-serif text-white uppercase'>{el.name}</h1>
                    <div className='destination-description'>{el.description}</div>

                    <div className="horizontal-line"></div>
                    
                    <div className='destination-details'>
                      <div className='destination-details--content text-white fs-300 ff-sans-cond uppercase letter-spacing-1'>
                        avg. distance
                        <span className='block-element fs-600 ff-serif text-white uppercase'> {el.distance}</span>
                      </div>
                      <div 
                        className='destination-details--content text-white fs-300 ff-sans-cond uppercase letter-spacing-1'
                        // style={{marginTop: '1.5rem'}}
                      >
                        est. travel time
                        <span className='block-element fs-600 ff-serif text-white uppercase'> {el.travel}</span>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Destinations
