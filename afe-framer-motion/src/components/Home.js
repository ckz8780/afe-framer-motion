import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return (
    <Jumbotron fluid className="bg-info text-light">
      <Container>
        <motion.h1
          className="display-1"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
        >
          Homepage
        </motion.h1>
        <motion.h4
          className="mb-5"
          initial={{ y: '-100vh' }}
          animate={{ y: 0 }}
          transition={{
            delay: 1
          }}
        >
          What a fancy homepage!
        </motion.h4>
        <Link to="/layout">
          <Button
            as={motion.button}
            variant="outline-light"
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
          >
            Continue
          </Button>
        </Link>
      </Container>
    </Jumbotron>
  )
}

export default Home
