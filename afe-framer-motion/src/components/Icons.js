import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Icons() {
  return (
    <Jumbotron fluid className="bg-light text-dark">
      <Container>
        <h1 className="display-1">Icons</h1>
        <Link to="/tables">
          <Button variant="outline-dark">Continue</Button>
        </Link>
      </Container>
    </Jumbotron>
  )
}

export default Icons