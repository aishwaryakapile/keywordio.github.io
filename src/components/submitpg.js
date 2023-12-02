import React from 'react'
import {Col, Container, Row } from 'react-bootstrap'
import './submitpg.css'

const Submitpg = () => {
  return (
    <>
      <Container fluid className='bg-light'>
        <Row className='p-4 mb-4'>
          <div className='pading bg-white text-start pt-3 white-div'>
           <Container>
            <Row>
              <Col md={4} className='mx-auto text-center'>
              <div className='submit-div'>
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
              <h3>Submitted</h3>
            </div></Col>
            </Row>
           </Container>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default Submitpg