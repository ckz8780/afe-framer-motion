import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Charts() {
  return (
    <Jumbotron fluid className="bg-warning text-dark">
      <Container>
        <h1 className="display-1">Charts</h1>
        <Link to="/presentations">
          <Button variant="outline-dark">Continue</Button>
        </Link>
      </Container>
    </Jumbotron>
  )
}

export default Charts
