import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap";
import LoginButtons from "./LoginButtons";

export default function ModalForm(props: {
  show: boolean;
  handleClose: () => void;
}) {
  const { show, handleClose } = props;

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <h5>Enter your details to join the Replay Sports Cards - BrandTV Community
        </h5>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col sm={4} className="border-right bg-light pt-2 pb-3 px-3">
            <LoginButtons/>

              <div className="row mt-2">
                <div className="col d-flex align-items-start">
                  <div className="icon-square p-2 rouded-2 text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <i className="bi bi-envelope-at"></i>
                  </div>

                  <div>
                    <h6 className="mb-2">Email</h6>
                    <p>hi@brandtv.com</p>
                  </div>
                </div>
              </div>

              <div className="row g-4">
                <div className="col d-flex align-items-start">
                  <div className="icon-square  p-2 rounded-2 text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <i className="bi bi-geo-alt"></i>
                  </div>

                  <div>
                    <h6 className="mb-2">Address</h6>
                    <p>Miami, USA, London, UK</p>
                  </div>
                </div>
              </div>

              <Row className="text-center mt-2">
                <Col xs={4}>
                  <a href="#">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                </Col>
                <Col xs={4}>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                </Col>
                <Col xs={4}>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </Col>
              </Row>
            </Col>
            <Col sm={8} className="pt-2">
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.name">
                  <Form.Label>Name *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    autoFocus
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.email">
                  <Form.Label>Email address *</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.username">
                  <Form.Label>Username *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    autoFocus
                    required
                  />
                </Form.Group>

                <div className="row">
                  <div className="col-sm-6">
                    <Form.Group className="mb-3" controlId="exampleForm.gender">
                      <Form.Label>Gender</Form.Label>
                      <Form.Select>
                        <option>Please select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="notsaying">Prefer not to say</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="col-sm-6">
                    <Form.Group className="mb-3" controlId="exampleForm.age">
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Age"
                        autoFocus
                        required
                      />
                    </Form.Group>
                  </div>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
