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
      <div className='space-x'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/SpaceX_logo_black.svg/2560px-SpaceX_logo_black.svg.png'></img>
      </div>
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