import React from 'react'
import './Paralax.scss'
const Paralax = () => {
  return (
    <div className='paralax' style={{
        // background:"linear-gradient(180deg,#111132,#505064)"
    }}>
    <h1>What i Did ?</h1>
      <div className='mountains'>
        <img src="../src/assets/mountains.png" alt="mountains" />
      </div>
      <div className='planets'>
        {/* <img src='../src/assets/planets.png' /> */}
      </div>
      <div className='starts'></div>
    </div>
  )
}

export default Paralax
