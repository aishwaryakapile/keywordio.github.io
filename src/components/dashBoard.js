import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Navigation from './navigation'
import SubDashboard from './subDashboard'

const DashBoard = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Navigation />
                    <SubDashboard/>
                </Row>
            </Container>
        </>
    )
}

export default DashBoard