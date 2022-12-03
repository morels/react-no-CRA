import React, { PropsWithChildren } from 'react';
import { Col, Container, Row } from 'reactstrap';

type Props = {
  title: string;
}

const BaseLayout = ({title, children}: PropsWithChildren<Props>) => (
  <Container>
    <Row>
      <Col>
        <h1>{title}</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        {children}
      </Col>
    </Row>
  </Container>
);

export { BaseLayout };