import React from "react";
import { Button, H1 } from 'components'
import { Container, Row } from "config/styles/globalStyles";

const Home = () => {

  return (
    <Container>
      <Row>
        <H1>Home</H1>
        <Button variant='link' to='/detail'>Detail</Button>
      </Row>
    </Container>
  )
};

export default Home;