import React from 'react'
import netflixlogo from "../utils/netflix logo.png"
const Header = () => {
  return (
    <div className='absolute  px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-44' src={netflixlogo}
        alt="netflix logo"
      />
    </div>
  )
}

export default Header