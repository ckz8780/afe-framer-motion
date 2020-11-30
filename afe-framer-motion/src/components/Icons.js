import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const headingVariants = {
  before: { opacity: 0 },
  after: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    }
  },
}

const spanVariants = {
  before: {
    opacity: 0,
    y: '-100vh',
  },
  after: {
    opacity: 1,
    y: 0,
  }
}

function Icons() {
  return (
    <Jumbotron fluid className="bg-light text-dark">
      <Container>
        <motion.h1
          className="display-1"
          initial="before"
          animate="after"
          variants={headingVariants}
        >
          {Array.from('Icons').map(
            letter => (
              <motion.span
                className="d-inline-block"
                variants={spanVariants}
                key={letter}
              >
                {letter}
              </motion.span>
            )
          )}
        </motion.h1>
        <Link to="/tables">
          <Button variant="outline-dark">Continue</Button>
        </Link>
      </Container>
    </Jumbotron>
  )
}

export default Icons