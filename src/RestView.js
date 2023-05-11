import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Operatingtime from './Operatingtime';
import Review from './Review';


function RestView() {

  const [restlist, setRest] = useState([])

  // api to acces data
  const getData = async () => {
    const result = await fetch('/restaurants.json')
    result.json().then(data => setRest(data.restaurants))
  }

  // object creste for params
  const params = useParams()
  console.log(params.id);

  // console.log(restlist);

  const singleRest = restlist.find(i => i.id == params.id)
  console.log(singleRest);

  useEffect(() => {
    getData()
  }, [])




  return (
    <>
      {singleRest ?
        (<Row>
          <Col lg={6} md={6}>
            <img className='w-75 continer p-5' style={{ height: '460px' }}
              src={singleRest.photograph} alt="" />
          </Col>

          <Col lg={6} md={6} className='mt-5 fs-6' >

            <ListGroup className='pe-5'>
              <ListGroup.Item> <h3 className='text-info'> {singleRest.name} </h3> </ListGroup.Item>
              <ListGroup.Item>Address <strong className='text-primary'>{singleRest.address}</strong> </ListGroup.Item>
              <ListGroup.Item>Neighborhood <strong>{singleRest.neighborhood}</strong> </ListGroup.Item>
              <ListGroup.Item>Cusine type <strong>{singleRest.cuisine_type}</strong> </ListGroup.Item>
              <ListGroup.Item>

                <Operatingtime workingTime={singleRest.operating_hours} />

                <Review reviewList={singleRest.reviews}/>

              </ListGroup.Item>
            </ListGroup>

          </Col>
        </Row>
        ) : ""
      }
    </>
  )
}

export default RestView