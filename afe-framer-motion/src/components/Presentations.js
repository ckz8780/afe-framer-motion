import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const buttonVariants = {
  before: {
    scale: [1, 1],
    rotate: [0, 0]
  },
  after: {
    scale: [1, 1.5],
    rotate: [0, 360],
    transition: {
      duration: 0.2,
    }
  }
}

function Presentations() {
  return (
    <Jumbotron fluid className="bg-info text-light">
      <Container>
        <h1 className="display-1">Presentations</h1>
        <Link to="/animations">
          <Button
            as={motion.button}
            initial="before"
            whileHover="after"
            variants={buttonVariants}
            variant="outline-light"
          >
            Continue
          </Button>
        </Link>
      </Container>
    </Jumbotron>
  )
}

export default Presentations
