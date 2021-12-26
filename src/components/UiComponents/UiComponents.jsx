import React from 'react'

const Components = () => {
  return (
    <section className="flow" id="interactive-elements">
      <h2 className="numbered-title"><span>03</span> Interactive elements</h2>
      
      {/* <!-- navigation --> */}
      <div>
        <nav>
          <ul className="primary-navigation underline-indicators flex">
            <li className="active">
              <a className="uppercase text-white letter-spacing-2" href="#"><span>01</span>Active</a>
            </li>
            <li>
              <a className="uppercase text-white letter-spacing-2" href="#"><span>02</span>Hovered</a>
            </li>
            <li>
              <a className="uppercase text-white letter-spacing-2" href="#"><span>03</span>Idle</a>
            </li>
          </ul>
        </nav>
      </div>
      
      <div className="flex">
          <div style={{marginTop: "5rem"}}>
            {/* <!-- explore button --> */}
            <a href="#" className="large-button uppercase ff-serif fs-500 text-dark bg-white">Explore</a>
          </div>
          
          <div style={{marginBottom: "50vh"}}>
            {/* <!-- Tabs --> */}
            
            
            {/* <!-- Dots --> */}
              
              
            {/* <!-- Numbers -->  */}
          </div>
      </div>   
    </section>
  )
}

export default Components
