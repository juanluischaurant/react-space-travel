import React, { useState,useEffect } from 'react'
import Navbar from '../components/Navbar'
import './Technology.css'
import data from '../data.json'

const Technology = () => {
  const [technologyTab, setTechnologyTab] = useState(0)
  
  // for matching or not media-query
  const [matches, setMatches] = useState(false)

  useEffect(()=>{
    const checkMediaQuery = ()=> {
      const media = window.matchMedia('(min-width: 45em)')
      // media.matches ? console.log(media.matches): console.log(matches)
      if (media.matches) {
        /* La pantalla tiene al menos min-width píxeles de ancho */
        setMatches(true)
        // console.log(matches)
      } else {
        /* La pantalla tiene menos de min-width píxeles de ancho */
        setMatches(false)
        // console.log(matches)
      }
    }

    window.addEventListener('resize', checkMediaQuery)
    checkMediaQuery()
    
    return ()=>{
      window.removeEventListener('resize', checkMediaQuery)
    }
  }, [matches])

  const portraitLandscape = matches ? 
    data.technology[technologyTab].images.portrait :
    data.technology[technologyTab].images.landscape

  return (
    <div className='technology-container'>
      <Navbar/>
      <div className="technology-container--inner">
        
        <div className='technology-container--title'>
          <h1 className='text-white fs-600 ff-sans-cond uppercase letter-spacing-1'>
            <span>03</span> Space launch 101</h1>
        </div>

        <div className="technology-container--body">

          <img 
            src={portraitLandscape}
            alt="" 
          />

          <div className="technology-container--content">
            
            <div className="numbers-indicators--container">
              {
                data.technology.map((el, id)=>{
                  return(
                    <>
                    <button 
                      onClick={()=>setTechnologyTab(id)}
                      className={`${technologyTab===id?'number-indicator--active':''} number-indicator fs-400 uppercase ff-serif`}
                    >{id+1}</button>
                    </>
                  )
                })
              }
            </div>

            <article className="technology-details">
              
              <h2 className="fs-400 ff-sans-cond uppercase letter-spacing-1">The terminology
                <span className="fs-700 uppercase ff-serif block-element">{data.technology[technologyTab].name}</span>
              </h2>
    
              <p>{data.technology[technologyTab].description}</p>
            </article>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Technology
