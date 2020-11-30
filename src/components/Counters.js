import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const headingVariants = {
  before: { opacity: 0 },
  after: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  },
}

const spanVariants = {
  before: {
    opacity: 0,
    scale: 5,
  },
  after: {
    opacity: 1,
    scale: 1,
  }
}

const buttonVariants = {
  ...spanVariants,
  after: {
    ...spanVariants.after,
    transition: {
      delay: 0.75
    }
  }
}


function Counters() {
  return (
    <Jumbotron fluid className="bg-danger text-light">
      <Container>
        <motion.h1
          className="display-1"
          initial="before"
          animate="after"
          variants={headingVariants}
        >
          {Array.from('Counters').map(
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
        <Link to="/charts">
          <Button
            as={motion.button}
            initial="before"
            animate="after"
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

export default Counters