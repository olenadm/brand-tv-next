import React from "react";
import { Card, Col, CardBody } from "react-bootstrap";

export default function RecommendedVideoList() {
  return (
    <>
      <h6 className="mt-2 mb-3 text-muted ms-3">Recommended</h6>

      <aside className="bg-secondary bg-gradient rounded-4 p-3 p-sm-4">
        <div className="row">
          {Array.from({ length: 16 }).map((_, i) => (
            <Col key={i} sm={3}>
              <Card className="rounded-3 mb-3 videoplaceholder text-center">
                <CardBody>
                  <p className="mb-0">Video: {i + 1}</p>
                  <a
                    href="#"
                    className="btn btn-default play my-4 text-center bg-gradient"
                  >
                    <i className="bi bi-play-fill"></i>
                  </a>
                </CardBody>
              </Card>
            </Col>
          ))}
        </div>
      </aside>
    </>
  );
}
