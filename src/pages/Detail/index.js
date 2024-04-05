import React from "react";
import { Button, H1 } from 'components'
import { Container, Row } from "config/styles/globalStyles";

const Detail = () => {

  return (
    <Container>
      <Row>
        <H1>Detail</H1>
        <Button variant='link' to='/'>Home</Button>
      </Row>
    </Container>
  )
};

export default Detail;