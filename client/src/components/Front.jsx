import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { FaArrowRight } from "react-icons/fa";
const Front = () => {
  return (
      <>
          <Container>
          <Row>
                  <Col lg={6}>
                      <h4 className='text-center fw-normal mt-5 m-0'>
                          Largest Car Source
                      </h4>
                      <h2 className='text-uppercase display-3  text-center'>
                          powered by <span className='front-line'>creators around</span> 
                      </h2>
                      <div className=" gap-5 d-flex align-items-center justify-content-center">
                      <h2 className='text-uppercase display-4  text-center'>the world.</h2>
                      <div className="justify-content-center d-flex flex-row">
                          <div className="p-4 bg-dark cirlce rounded-circle"></div>
                          <div className="p-4 bg-warning circle rounded-circle"></div>
                          <div className="p-4 bg-danger circle rounded-circle"></div>
                          <div className="p-4 bg-info circle rounded-circle"></div>
                          </div>
                      </div>
                      <div className="align-items-center justify-content-center d-flex mt-5 flex-column">
                          <a href="" className='text-decoration-none text-secondary '>Don't have account?</a>
                          <div className="d-flex align-items-center mt-2 gap-2 justify-content-center fw-bolder">
                              <a href="" className='text-decoration-none text-dark text-center'>Create account</a>
                              <FaArrowRight />
                            
                              </div>
                      </div>
                      <div className="p-4 mt-4 rounded-5 frontabt text-white justify-content-center d-flex gap-3 flex-row">
                          <h4 className=''>About-Us</h4>
                          <p className='m-0 w-50'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatem laborum optio eaque autem aut dolorem minima!</p>
                      </div>
              </Col>
              <Col lg={6}>
                  
              </Col>
              </Row>
              </Container>
      </>
  )
}

export default Front