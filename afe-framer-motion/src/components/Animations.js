import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const jumbotronVariants = {
  before: {
    backgroundColor: '#28a745',
  },
  after: {
    backgroundColor: ['#28a745', '#17a2b8', '#007bff'],
    transition: {
      yoyo: Infinity,
      duration: 3,
    }
  }
}
function Animations() {
  return (
    <Jumbotron fluid
      as={motion.div}
      className="text-light"
      initial="before"
      animate="after"
      variants={jumbotronVariants}
    >
      <Container>
        <h1 className="display-1">Animations</h1>
        <Link to="/ui-development">
          <Button variant="outline-light">Continue</Button>
        </Link>
      </Container>
    </Jumbotron>
  )
}

export default Animations