import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Layout() {
  return (
    <Jumbotron fluid className="bg-success text-light">
      <Container>
        <h1 className="display-1">Layout</h1>
        <Link to="/routing">
          <Button variant="outline-light">Continue</Button>
        </Link>
      </Container>
    </Jumbotron>
  )
}

export default Layout
