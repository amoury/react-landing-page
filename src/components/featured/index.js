import React from 'react'
import Carousel from './Carousel';
import CountDown from './CountDown';

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>

      <Carousel/>
      
      <div className="artist_name">
        <div className="wrapper">
          Dev Fest UAE 2018
        </div>
      </div>

      <CountDown />

    </div>
  )
}

export default Featured
