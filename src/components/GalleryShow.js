import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'


const LaunchShow = () => {

  const { id } = useParams()

  // State

  const [gallery, setGallery] = useState(null)
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getGallery = async () => {
      try {
        const { data } = await axios.get(`https://api.spacexdata.com/v4/launches/${id}`)
        console.log(data)
        setGallery(data)
      } catch (error) {
        console.log(error)
        setErrors(true)
      }
    }
    getGallery()
  }, [id])


  return (
    <Container className='gallery'>
      {gallery ?
        <>
          <div>
            <h1>Gallery</h1>
            <Link to="/launches" className='btn btn-danger gallery-button' >Back to Launches</Link>
            <Link to={`/launches/${id}`} className='btn btn-danger gallery-button'>Back to previous page</Link>
          </div>


          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src={`${gallery.links.flickr.original[0]}`}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />

              <img
                src={`${gallery.links.flickr.original[1]}`}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Wintry Mountain Landscape"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src={`${gallery.links.flickr.original[2]}`}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Mountains in the Clouds"
              />

              <img
                src={`${gallery.links.flickr.original[3]}`}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src={`${gallery.links.flickr.original[4]}`}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Waves at Sea"
              />

              <img
                src={`${gallery.links.flickr.original[5]}`}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Yosemite National Park"
              />
            </div>
          </div>
        </>
        :
        <div className='text-center'>
          {errors ? 'Something went wrong! Please try again later!' : <h2>Loading...</h2>}
        </div>

      }

    </Container>
  )
}

export default LaunchShow