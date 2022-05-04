import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const LaunchShow = () => {
  
  const { id } = useParams()

  // State

  const [ launch, setLaunch ] = useState(null)
  const [ errors, setErrors ] = useState(false)

  useEffect(() => {
    const getLaunch = async () => {
      try {
        const { data } = await axios.get(`https://api.spacexdata.com/v4/launches/${id}`)
        console.log(data)
        setLaunch(data)
      } catch (error) {
        console.log(error)
        setErrors(true)
      }
    }
    getLaunch()
  }, [id])

  
  return (
    <>
      <Container className='launch-show'>
        <Row>
          {launch ?
            <>
              <Col xs="12">
                <h1>{launch.name}</h1>
                <hr />
              </Col>
              <Col md="12">
                <iframe width="1280" height="720" src= {`https://www.youtube.com/embed/${launch.links.youtube_id}`}  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </Col>
              <Col md="6">
                <h2>Flight Data</h2>
                <hr />
                <p>Flight Outcome: {launch.success ? 'Successful' : 'Unsuccesful'}</p>
                <hr />
                <p>{launch.details}</p>
                <hr />
                <p>{launch.flight_number}</p>
                <hr />
                <p>{launch.date_local}</p>
                <hr />
                <Link to="/launches" className='btn btn-danger'>Back to Launches 🚀</Link>
                <Link to={`/launches/${id}/gallery`} className='btn btn-danger gallery-btn'>Gallery</Link>
              </Col>
            </>
            :
            <div className='text-center'>
              {errors ? 'Something went wrong! Please try again later!' : <h2>Loading...</h2>}
            </div>
          }
        </Row>
      </Container>

    </>

  )
}

export default LaunchShow