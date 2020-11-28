import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const jumbotronVariants = {
  before: { opacity: 0 },
  after: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    }
  },
}

const childVariants = {
  before: {
    opacity: 0,
    y: 150,
  },
  after: {
    opacity: 1,
    y: 0,
  }
}

function Routing() {
  return (
    <Jumbotron
      fluid
      as={motion.div}
      className="bg-warning text-dark"
      initial='before'
      animate='after'
      variants={jumbotronVariants}
    >
      <Container>
        <motion.h1
          className="display-1"
          variants={childVariants}
        >
          Routing
        </motion.h1>
        <Link to="/notifications">
          <Button
            as={motion.button}
            variant="outline-dark"
            variants={childVariants}
          >
            Continue
          </Button>
        </Link>
      </Container>
    </Jumbotron>
  )
}

export default Routing
