import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const jumbotronVariants = {
  before: {
    opacity: 0
  },
  after: {
    opacity: 1,
    transition: {
      duration: 1
    }
  },
}

function Tables() {
  return (
    <Jumbotron fluid
      as={motion.div}
      className="bg-dark text-light"
      initial="before"
      animate="after"
      variants={jumbotronVariants}
    >
      <Container>
        <h1 className="display-1">Tables</h1>
        <Link to="/counters">
          <Button variant="outline-light">Continue</Button>
        </Link>
      </Container>
    </Jumbotron>
  )
}

export default Tables