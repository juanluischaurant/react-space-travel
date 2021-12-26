import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import './Crew.css'
import data from '../data.json'

const Crew = () => {
  
  const [crewTab, setCrewTab] = useState(0)
 
  useEffect(()=>{
    console.log(data.crew)
  },[])

  return (
    <div className='crew-container'>
      <Navbar/> 
      
      <div className="crew-container--inner">
        
        <div className='crew-container--title '>
          <h1 className='text-white fs-600 ff-sans-cond uppercase letter-spacing-1'>
            <span>02</span> Meet your crew</h1>
        </div>

        <div className="crew-container--content">
          
          <img 
            src={data.crew[crewTab].images.png}
            alt="Douglas Hurley"
          />
          
          <div className="crew-container--body">
            
            <div className="dot-indicators flex">
              {
                data.crew.map((el, idx)=>{
                  return(
                    <button
                      className={crewTab===idx?'dot-indicator--active':''}
                      onClick={()=>setCrewTab(idx)}
                    ></button>

                  )
                })
              }

            </div>

            <article className="crew-details">
              
              <h2 className="fs-600 ff-serif uppercase">{data.crew[crewTab].role}
                <span className="fs-700 uppercase ff-serif block-element">{data.crew[crewTab].name}</span>
              </h2>
    
              <p>{data.crew[crewTab].bio}</p>
            </article>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Crew
