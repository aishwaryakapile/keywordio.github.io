import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'
import './navigation.css'

const Navigation = () => {
  return (
  <>
  <Container fluid>
    <Row>
    <Navbar className="bg-body-light">
      <Container fluid className='me-4'>
        <Navbar.Brand className='fw-bold'>APP LOGO</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
         <NavLink to='/'> <Navbar.Text className='me-4'>
            DASHBOARD
          </Navbar.Text></NavLink>
          <NavLink to='/createad'>    <Navbar.Text>
            CREATE ADS
          </Navbar.Text></NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  </Container></>
  )
}

export default Navigation