import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Notifications() {
  return (
    <Jumbotron fluid className="bg-primary text-light">
      <Container>
        <h1 className="display-1">Notifications</h1>
        <Link to="/icons">
          <Button variant="outline-light">Continue</Button>
        </Link>
      </Container>
    </Jumbotron>
  )
}

export default Notifications