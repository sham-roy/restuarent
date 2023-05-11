import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Restuarent.css'
import { Link } from 'react-router-dom';



function Restaurent() {

  const [restlist, setRest] = useState([])

  // api to acces data
  const getData = async () => {
    const result = await fetch('/restaurants.json')
    result.json().then(data => setRest(data.restaurants))
  }

  console.log(restlist);

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='container'>
      <Row className='ms-5'>
        {
          restlist.map(rest => (
            <Col className='p-2' lg={4} md={6} >
              <Link id='l1' to={`/viewRest/${rest.id}`}>
                <Card id='c1' className='mt-5 ms-5' style={{ width: '18rem' }}>
                  <Card.Img variant="top" style={{ height: '300px' }} src={rest.photograph} />
                  <Card.Body>
                    <Card.Title>{rest.name}</Card.Title>
                    <Card.Text>{rest.address}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default Restaurent