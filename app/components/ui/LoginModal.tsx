import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap";
import LoginButtons from "./LoginButtons";

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
                <LoginButtons />
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
