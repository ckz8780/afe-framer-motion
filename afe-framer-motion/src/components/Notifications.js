import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const pathVariants = {
  before: {
    pathLength: 0
  },
  after: {
    pathLength: 1,
    transition: {
      duration: 1,
    }
  }
}
function Notifications() {
  return (
    <Jumbotron fluid className="bg-primary text-light">
      <Container>
        <h1 className="display-1">Notifications</h1>
        <div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="130"
          >
            <motion.path
              d="M 5 0 Q 5 50 50 50 Q 100 50 100 95 Q 100 50 150 50 Q 195 50 195 5 Q 100 50 5 2.5"
              fill="transparent"
              strokeWidth="5"
              stroke="#fafafa"
              initial="before"
              animate="after"
              variants={pathVariants}
            />
          </svg>
        </div>
        <Link to="/icons">
          <Button variant="outline-light">Continue</Button>
        </Link>
      </Container>
    </Jumbotron>
  )
}

export default Notifications