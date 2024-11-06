/* eslint-disable @next/next/no-html-link-for-pages */

import { Container, Row, Col, Card, CardBody } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Container className="my-auto px-5">
        <Row><Col><h1 className='my-5'>Please choose demo site</h1></Col></Row>
        <Row className="gx-5 align-items-center justify-content-center">
          <Col sm={6}>
            <Card bg='primary' className='mb-3'>
              <CardBody>
                <a href="/brandtv" className='btn text-white'>Brand TV Landing</a>
              </CardBody>
            </Card>
          </Col>
          <Col sm={6}>
            <Card bg='danger' className='mb-3'>
              <CardBody>
                <a href="/replay" className='btn text-white'>
                  Replay
                </a>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
