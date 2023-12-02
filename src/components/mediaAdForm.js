import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import SplitButton from 'react-bootstrap/SplitButton';
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import {useNavigate} from 'react-router-dom'
import './mediaadform.css'

const MediaAdForm = () => {
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault(e);
        navigate('/submit');

        setTimeout(() => {
            navigate('/createad');
          }, 600);
    }
    return (
        <>
            <Container fluid className='bg-light'>
                <Row className='p-4 mb-4'>
                    <div className='pading bg-white text-start pt-3'>
                        <h5>Create Text & Media</h5>
                        <Container fluid className='mt-4'>
                            <Row className='mb-2 pb-2'>
                                <Col md={6}>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="">
                                            <Form.Label>Heading 01</Form.Label>
                                            <Form.Control size="lg" type="text" placeholder="Add a heading that would intrested user" className='mb-4' />
                                            <Form.Label>Heading 02</Form.Label>
                                            <Form.Control size="lg" type="text" placeholder="Add a heading that would intrested user" className='mb-4' />
                                            {/* <Form.Label>Bussiness name</Form.Label>
                                            <Form.Control size="lg" type="text" placeholder="Add Your Bussiness" /> */}
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Discription 01</Form.Label>
                                        <Form.Control as="textarea" rows={6} className='mb-3' placeholder='Add primary text to helps user understand more about your product, services or offers' />
                                    </Form.Group>
                                    {/* <Form.Label>Button Label</Form.Label>
                                    <InputGroup>

                                        <Form.Control aria-label="Text input with dropdown button" size="lg" placeholder='Select a that best suit your ad' />
                                        <SplitButton
                                            variant="outline-secondary"
                                            title=""
                                            id="segmented-button-dropdown-2"
                                            alignRight
                                        >
                                            <Dropdown.Item href="#"></Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                        </SplitButton>
                                    </InputGroup> */}

                                </Col>
                                <Form>
                                <Row>
                                   <Col md={4}> 
                                    <Form.Label>Landscape Marketing image(1.9:1)</Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="Add the Url of the video you want to use for ad " className='mb-4'/></Col><Col md={4}> 
                                    <Form.Label>Portrait Marketing image(4:5)</Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="Add the Url of the video you want to use for ad " className='mb-4'/></Col><Col md={4}> 
                                    <Form.Label>Square Marketing image(1:1)</Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="Add the Url of the video you want to use for ad " className='mb-4'/></Col>
                                   </Row>
                                    <Form.Label>Video URL</Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="Add the Url of the video you want to use for ad " className='mb-4' />
                                    <Row>
                                   <Col md={6}> 
                                    <Form.Label>Bussiness Name</Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="Add the Url of the video you want to use for ad " className='mb-4'/></Col>
                                    <Col md={6}> 
                                   <Form.Label>Button Label</Form.Label>
                                    <InputGroup>

                                        <Form.Control aria-label="Text input with dropdown button" size="lg" placeholder='Select a that best suit your ad' />
                                        <SplitButton
                                            variant="outline-secondary"
                                            title=""
                                            id="segmented-button-dropdown-2"
                                            alignRight
                                        >
                                            <Dropdown.Item href="#"></Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                        </SplitButton>
                                    </InputGroup>
                                    </Col>
                                  
                                  
                                   </Row>
                                    <Form.Label>Website URL</Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="Add the Url of the landing you want to redirect user to " />
                                </Form>
                            </Row>
                            <Row className='mt-1 mb-5'>
                                <div className='d-flex justify-content-end'>
                                    <Button variant='light' className='form-btn back-btn me-3'>Back</Button>
                                    <Button className='form-btn' onClick={handleSubmit}>Submit</Button></div>
                            </Row>
                        </Container>
                    </div>


                </Row>

            </Container >
        </>
    )
}

export default MediaAdForm