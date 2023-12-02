import { React, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './subcreatead.css'

const SubCreatead = () => {
    const navigate = useNavigate();

    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const handleCheckbox1Change = () => {
        setIsChecked1(!isChecked1);
        if (!isChecked1) {
            navigate('/textad');
        }
    };

    const handleCheckbox2Change = () => {
        setIsChecked2(!isChecked2);
        if (!isChecked2) {
            navigate('/mediaad');
        }
    };
    return (
        <>
            <Container fluid className='bg-light'>
                <Row className='p-4'>
                    <Col md={12} className='border bordrradius bg-white'>

                        <Container fluid>
                            <Row className='pb-5'>
                                <h4 className='text-start pt-3'>Create Ads</h4>
                                <Col md={8} className='mx-auto'>
                                    <Container fluid>
                                        <Row>
                                            <Col md={6} className='p-5'>
                                                <div className='shadow-div'>
                                                    <div className='main-div'>
                                                        <form>
                                                            <input type='checkbox' checked={isChecked1} onChange={handleCheckbox1Change} className='mobile-checkbox'/>
                                                        </form>
                                                        <div className='mobile-div'>
                                                            <div className='inner-mobdiv'>
                                                                <div className='mob-header text-start mb-2'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" className='setting-svg' width="14" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" className='search-svg' width="16" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                                                                </div>
                                                                <div className='mb-4'>
                                                                    <div className='empty-div mb-2'>

                                                                    </div>
                                                                    <div className='empty-div mb-2'></div><div className='empty-div mb-2'></div><div className='empty-div mb-2'></div>
                                                                </div>
                                                                <div className='para-div pb-3 mb-4'>
                                                                    <p className='textblue border-bottom pb-3'>100 B| stock and ready to shop | Mumbai reward program</p>
                                                                    <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ...</p>
                                                                </div>
                                                                <div className='mb-4'>
                                                                    <div className='empty-div mb-2'>

                                                                    </div>
                                                                    <div className='empty-div mb-2'></div><div className='empty-div mb-2'></div><div className='empty-div mb-2'></div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className='mobile-btm bg-light pb-4'>
                                                        <span className='text-secondary '>Create</span>

                                                        <h3>Text Ad</h3>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={6} className='p-5'>
                                                <div className='shadow-div'>
                                                    <div className='main-div'>
                                                        <form>
                                                            <input type='checkbox' checked={isChecked1} onChange={handleCheckbox1Change} className='mobile-checkbox'/>
                                                        </form>
                                                        <div className='mobile-div'>
                                                            <div className='inner-mobdiv'>
                                                                <div className='mob-header text-start mb-2'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" className='setting-svg' width="14" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" className='search-svg' width="16" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                                                                </div>
                                                                <div className='mb-4'>
                                                                    <div className='empty-div mb-2'>

                                                                    </div>
                                                                    <div className='empty-div mb-2'></div><div className='empty-div mb-2'></div><div className='empty-div mb-2'></div>
                                                                </div>
                                                                <div className='img-div'>
                                                                    <Container>
                                                                        <Row>
                                                                            <Col md={8}>
                                                                                <img className="largeimg"src="https://images.unsplash.com/photo-1635674686856-38f78c16c47a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                                                                            </Col>
                                                                            <Col md={4}>
                                                                                <img className="mb-1"src="https://images.unsplash.com/photo-1635247983714-22079eb0d161?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                                                                                <img src="https://images.unsplash.com/photo-1635247983714-22079eb0d161?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                                                                            </Col>
                                                                        </Row>
                                                                    </Container>
                                                                </div>
                                                               
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className='mobile-btm bg-light pb-4'>
                                                        <span className='text-secondary'>Media</span>

                                                        <h3>Text Ad</h3>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>

                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SubCreatead