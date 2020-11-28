import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Layout() {
  return (
    <Jumbotron fluid className="bg-success text-light">
      <Container>
        <motion.h1
          className="display-1"
          initial={{ y: '-100vh' }}
          animate={{ y: 0 }}
        >
          Layout
        </motion.h1>
        <Link to="/routing">
          <Button
            as={motion.button}
            variant="outline-light"
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
          >
            Continue
          </Button>
        </Link>
      </Container>
    </Jumbotron>
  )
}

export default Layout
