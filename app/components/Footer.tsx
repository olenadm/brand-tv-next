import { Container, Row, Col } from "react-bootstrap";
const Footer: React.FC = () => {
  return (
    <footer className='py-4 bg-dark mt-auto rounded-top-5 footer'>
      <Container>
        <Row>
          <Col>
            <p className="text-white mb-0">Copyright brand.tv</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
