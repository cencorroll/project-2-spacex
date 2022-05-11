import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'
import { Container, Row, Col, Card } from 'react-bootstrap'

const CrewIndex = () => {

  const [crews, setCrews] = useState([])

  useEffect(() => {
    const getCrews = async () => {
      try {
        const { data } = await axios.get('https://api.spacexdata.com/v4/crew')
        setCrews(data)
        console.log(data)

      } catch (error) {
        console.log(error)
      }
    }
    getCrews()
  }, [])

  return (
    <>
      <div className='space-x'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/SpaceX_logo_black.svg/2560px-SpaceX_logo_black.svg.png'></img>
      </div>
      <Container className='crew-list'>
        <Row>
          {crews.map(launch => {
            const { name, id, image } = launch
            return (
              <Col key={id} md='5' lg='4' className='launch'>
                <Link to={`/crew/${id}`}>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image}/>
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

export default CrewIndex

