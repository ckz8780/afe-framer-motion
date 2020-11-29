import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const headingVariants = {
  before: { opacity: 0 },
  after: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      duration: 0.5,
      staggerChildren: 0.1,
    }
  },
}

const spanVariants = {
  before: {
    color: '#000'
  },
  after: {
    color: ['#000', '#f00', '#00f'],
    transition: {
      duration: 2,
      yoyo: Infinity
    }
  }
}

function Charts() {
  return (
    <Jumbotron fluid className="bg-warning text-dark">
      <Container>
        <motion.h1
          className="display-1"
          initial="before"
          animate="after"
          variants={headingVariants}
        >
          {Array.from('Charts').map(
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
        <Link to="/presentations">
          <Button variant="outline-dark">Continue</Button>
        </Link>
      </Container>
    </Jumbotron>
  )
}

export default Charts
