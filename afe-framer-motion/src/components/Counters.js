import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Counters() {
  return (
    <Jumbotron fluid className="bg-danger text-light">
      <Container>
        <h1 className="display-1">Counters</h1>
        <Link to="/charts">
          <Button variant="outline-light">Continue</Button>
        </Link>
      </Container>
    </Jumbotron>
  )
}

export default Counters