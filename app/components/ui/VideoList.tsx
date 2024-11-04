import React from "react";
import { Card, Col, CardBody } from "react-bootstrap";

export default function VideoList(props:{catName: string | undefined}) {
    const {catName} = props;
    const category =  catName? catName : 'All';
  return (
    <>
      <h6 className="mt-2 mb-3 text-muted ms-3 fw-normal">Featured / {category}</h6>

      <div className="row">
        {Array.from({ length: 16 }).map((_, i) => (
          <Col key={i} sm={3}>
            <Card className="rounded-3 mb-2 videoplaceholder text-center">
              <CardBody>
                <p className="mb-0">
                  Video: {category} {i + 1}
                </p>
                <a href="#" className="btn btn-default play my-4 text-center bg-gradient"><i className="bi bi-play-fill"></i></a>
              </CardBody>
            </Card>
            <a href="#" className="btn btn-info mb-3 text-center w-100 text-white bg-gradient mb-4">CTA</a>

          </Col>
        ))}
      </div>
    </>
  );
}
