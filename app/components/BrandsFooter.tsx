/* eslint-disable @next/next/no-html-link-for-pages */
import { Container, Row, Col } from "react-bootstrap";
const BrandsFooter: React.FC = () => {
  return (
    <footer className="py-2 py-md-4 bg-dark mt-auto rounded-top-5 footer d-none d-md-block">
      <Container>
        <Row className="d-none d-md-block">
          <Col>
          <p className="text-white mb-0">Copyright <a href='/brandtv'>brand.tv</a></p>
          </Col>
        </Row>
      
      </Container>
    </footer>
  );
};

export default BrandsFooter;
