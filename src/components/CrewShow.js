import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const CrewShow = () => {

  const { id } = useParams()

  const [crewMember, setCrewMember] = useState(null)
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getCrew = async () => {
      try {
        const { data } = await axios.get(`https://api.spacexdata.com/v4/crew/${id}`)
        console.log(data)
        setCrewMember(data)
      } catch (error) {
        console.log(error)
        setErrors(true)
      }
    }
    getCrew()
  }, [id])


  return (
    <Container className='crew-show'>
      <Row>
        {crewMember ?
          <>
            <Col xs="12">
              <h1>{crewMember.name}</h1>
              <hr />
            </Col>
            <Col className='crewshow-container'>
              <Col className='text-center'>
                <img className='crew-img' src={crewMember.image} />
              </Col>
              <Col>
                <h3>Status: {crewMember.status}</h3>
                <hr />
                <p>{crewMember.agency}</p>
                <hr />
                <p><Link as={Link} to= {`/launches/${crewMember.launches[0]}`} className='btn btn-primary'>Launch details 🚀</Link>{' '}</p>
                <hr />
                <p><Button src={crewMember.wikipedia}>More information</Button>{' '}</p>
                <hr />
                <Link to="/crew" className='btn btn-danger'>Back to Crews 🚀</Link>
              </Col>
            </Col>
          </>
          :
          <h2 className='text-center'>
            {errors ? 'Something went wrong! Please try again later!' : <h2>Loading...</h2>}
          </h2>
        }
      </Row>
    </Container>
  )
}

export default CrewShow