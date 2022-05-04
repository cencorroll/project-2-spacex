import React from 'react'

import { Link } from 'react-router-dom'

const Home = () => {
  return (

    <div className="hero text-center">
      <div className="hero-container bg-light">
        <h1 className='display-3'>🚀 SpaceX </h1>
        <p>Discover all of SpaceX launches </p>
        <Link to="/launches" className='btn btn-danger'>Discover Launches</Link>
      </div>
    </div>
  )
}

export default Home