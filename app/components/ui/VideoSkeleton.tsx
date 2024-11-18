import React from "react";
import { Card, CardBody } from "react-bootstrap";

export default function VideoSkeleton() {
  return (
    <>
      <Card className="rounded-3 mb-3 videoplaceholder text-center">
        <CardBody className="d-flex justify-content-center align-items-center">Loading</CardBody>
      </Card>
    </>
  );
}
