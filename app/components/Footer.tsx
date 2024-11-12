/* eslint-disable @next/next/no-html-link-for-pages */
import { Container, Row, Col } from "react-bootstrap";
const Footer: React.FC = () => {
  return (
    <footer className="py-2 py-md-4 bg-dark mt-auto rounded-top-5 footer">
      <Container>
        <Row className="d-none d-md-block">
          <Col>
            <p className="text-white mb-0">
              Copyright <a href="/brandtv">brand.tv</a>
            </p>
          </Col>
        </Row>
        {/* <Row className="d-md-none text-center">
          <Col xs={4}>
            <Link href="/brandtv" scroll={true}>
              <i className="bi bi-house-check"></i>
            </Link>
          </Col>
          <Col xs={4}>
            <Link href="/brandtv" scroll={true}>
              <i className="bi bi-person-video2"></i>
            </Link>
          </Col>
          <Col xs={4}>
            <Link href="/brandtv" scroll={true}>
              <i className="bi bi-person-check"></i>
            </Link>
          </Col>
        </Row> */}
      </Container>
    </footer>
  );
};

export default Footer;
