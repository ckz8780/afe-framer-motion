import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Animations() {
  return (
    <Jumbotron fluid className="bg-success text-light">
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