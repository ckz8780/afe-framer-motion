import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Tables() {
  return (
    <Jumbotron fluid className="bg-dark text-light">
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