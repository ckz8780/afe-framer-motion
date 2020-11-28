import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function UIDevelopment() {
  return (
    <Jumbotron fluid className="bg-light text-info">
      <Container>
        <h1 className="display-1">UI Development</h1>
        <Link to="/">
          <Button variant="outline-info">Restart</Button>
        </Link>
      </Container>
    </Jumbotron>
  )
}

export default UIDevelopment
