import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Jumbotron fluid className="bg-info text-light">
      <Container>
        <h1 className="display-1">Homepage</h1>
        <Link to="/layout">
          <Button variant="outline-light">Continue</Button>
        </Link>
      </Container>
    </Jumbotron>
  )
}

export default Home
