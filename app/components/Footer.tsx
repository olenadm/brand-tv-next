import { Container, Row, Col } from "react-bootstrap";
const Footer: React.FC = () => {
  return (
    <footer className='py-3'>
      <Container>
        <Row>
          <Col>
            <p className="text-muted mb-0">Copyright brand.tv</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
