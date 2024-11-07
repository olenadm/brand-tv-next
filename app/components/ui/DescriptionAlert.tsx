import React from "react";
import { Alert, AlertLink } from "react-bootstrap";

export default function DescriptionAlert() {
  return (
    <Alert variant="light" className="mt-4 d-inline-block p-5">
      Over 2500 companies use our tools to better their business.{" "}
      <AlertLink href="/" className="align-items-center">
        Read more <i className="bi bi-arrow-right"></i>
      </AlertLink>
    </Alert>
  );
}
