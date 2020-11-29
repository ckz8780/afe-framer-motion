import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  before: {
    opacity: 0
  },
  after: {
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}

function UIDevelopment() {
  return (
    <Jumbotron fluid className="bg-light text-info">
      <Container
        as={motion.div}
        initial="before"
        animate="after"
        variants={containerVariants}
      >
        <h1 className="display-1">UI Development</h1>
        <Link to="/">
          <Button variant="outline-info">Restart</Button>
        </Link>
      </Container>
    </Jumbotron>
  )
}

export default UIDevelopment
