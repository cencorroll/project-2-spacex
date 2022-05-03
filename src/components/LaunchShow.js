import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const LaunchShow = () => {
  
  const { id } = useParams()

  // State

  const [launch, setLaunch] = useState(null)

  useEffect(() => {
    const getLaunch = async () => {
      try {
        const { data } = await axios.get(`https://api.spacexdata.com/v4/launches/${id}`)
        console.log(data)
        setLaunch(data)
      } catch (error) {
        console.log(error)
      }
    }
    getLaunch()
  }, [id])

  
  return (
    <Container className='launch-show'>
      <Row>
        { launch ?
          <>
            <Col xs="12">
              <h1>{launch.name}</h1>
              <hr />
            </Col>
            <Col md="6">
              <h1>IFRAME</h1>
              {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/"title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
            </Col>
            <Col md="6">
              <h3>{launch.success ? 'Successful' : 'Unsuccessful'}</h3>
              <hr />
              <p>{launch.details}</p>
              <hr />
              <p>{launch.flight_number}</p>
              <hr />
              <p>{launch.date_local}</p>
              <hr />
              <Link to="/launches" className='btn btn-danger'>Back to Launches 🚀</Link>
            </Col>
          </>
          :
          <h2>Error</h2>
        }
      </Row>
    </Container>
  )
}

export default LaunchShow