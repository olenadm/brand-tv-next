import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap";

export default function LoginModal(props: {
  show: boolean;
  handleClose: () => void;
}) {
  const { show, handleClose } = props;

  return (
    <Modal show={show} onHide={handleClose} centered size="sm">
      <Modal.Header closeButton>
        <Modal.Title>Log In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col className="text-center">
              <Form>
                <button className="btn btn-dark my-3  w-100">
                  Sign in with Apple <i className="bi bi-apple ms-3"></i>
                </button>
                <button className="btn btn-dark my-3  w-100">
                  Sign in with Google <i className="bi bi-google ms-3"></i>
                </button>
                <button className="btn btn-dark my-3  w-100">
                  Sign in with Facebook <i className="bi bi-facebook ms-3"></i>
                </button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
