import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

//states


const LaunchIndex = () => {

  const [launches, setLaunches] = useState([])

  useEffect(() => {
    const getLaunches = async () => {
      try {
        const { data } = await axios.get('https://api.spacexdata.com/v4/launches')
        setLaunches(data)
        console.log(data)

      } catch (error) {
        console.log(error)
      }
    }

    getLaunches()
  }, [])

  return (
    <>
      <h1>LaunchIndex</h1>
      <Container className='launch-list'>
        <Row>
          {launches.map(launch => {
            
            const { name, id, links } = launch
            return (
              <Col key={id} md='5' lg='4' className='launch'>
                <Link to={`/launches/${id}`}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={links.patch.large}/>
                    <Card.Body>
                      <Card.Title>{name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            )
          })}
          
        </Row>
      </Container>
      <Link to="/">Back to home</Link>
    </>
  )
}

export default LaunchIndex