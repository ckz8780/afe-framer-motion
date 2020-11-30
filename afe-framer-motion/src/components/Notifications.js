import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const headingVariants = {
  before: {
    opacity: 0,
  },
  after: {
    opacity: 1,
    x: [100, -100, 50, -50, 0],
    transition: {
      duration: 1
    }
  }
}

const buttonVariants = {
  before: {
    opacity: 0,
    scale: 0,
  },
  after: {
    opacity: 1,
    scale: [1, 1.5, 0.5, 1],
    transition: {
      duration: 1
    }
  }
}

function Notifications() {
  return (
    <Jumbotron fluid className="bg-primary text-light">
      <Container>
        <motion.h1
          className="display-1"
          initial="before"
          animate="after"
          variants={headingVariants}
        >
          Notifications
        </motion.h1>

        <Link to="/icons">
          <Button
            as={motion.button}
            variant="outline-light"
            initial="before"
            animate="after"
            variants={buttonVariants}
          >
            Continue
          </Button>
        </Link>
      </Container>
    </Jumbotron>
  )
}

export default Notifications