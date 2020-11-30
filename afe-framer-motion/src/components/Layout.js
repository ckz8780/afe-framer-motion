import React from 'react'
import { Jumbotron, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const pathVariants = {
  before: {
    pathLength: 0
  },
  after: {
    pathLength: 1,
    transition: {
      duration: 5
    }
  }
}

function Layout() {
  return (
    <Jumbotron fluid className="bg-success text-light">
      <Container>
        <Row>
          <Col>
            <motion.h1
              className="display-1 mb-2"
              initial={{ y: '-100vh' }}
              animate={{ y: 0 }}
            >
              Layout
            </motion.h1>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 295">
              <motion.path d="M 20 5 L 125 5 Q 140 5 140 20 L 140 125 Q 140 140 125 140 L 20 140 Q 5 140 5 125 L 5 20 Q 5 5 20 5 M 170 5 L 440 5 Q 455 5 455 20 L 455 125 Q 455 140 440 140 L 170 140 Q 155 140 155 125 L 155 20 Q 155 5 170 5 M 20 155 L 440 155 Q 455 155 455 170 L 455 275 Q 455 290 440 290 L 20 290 Q 5 290 5 275 L 5 170 Q 5 155 20 155" stroke="#fff" fill="none" initial="before" animate="after" variants={pathVariants} />
            </svg>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/routing">
              <Button
                as={motion.button}
                variant="outline-light"
                initial={{ y: '100vh' }}
                animate={{ y: 0 }}
                className="mt-3"
              >
                Continue
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default Layout
