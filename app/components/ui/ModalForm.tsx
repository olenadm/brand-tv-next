import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap";

export default function ModalForm(props: {
  show: boolean;
  handleClose: () => void;
}) {
  const { show, handleClose } = props;

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col sm={4} className="border-right bg-light p-3">
              <h6>
                Enter your details to join the Replay Sports Cards - <br />{" "}
                BrandTV Community
              </h6>

              <div className="row">
                <div className="col d-flex align-items-start">
                  <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <i className="bi bi-envelope-at"></i>
                  </div>

                  <div>
                    <h4 className="fs-2 text-body-emphasis">Email</h4>
                    <p>hi@brandtv.com</p>
                  </div>
                </div>
              </div>

              <div className="row g-4">
                <div className="col d-flex align-items-start">
                  <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <i className="bi bi-geo-alt"></i>
                  </div>

                  <div>
                    <h4 className="fs-2 text-body-emphasis">Address</h4>
                    <p>Miami, USA, London, UK</p>
                  </div>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col">
                  <h6>Follow us:</h6>
                </div>
              </div>
              <Row className="text-center mt-3">
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
            <Col sm={8}>
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
