"use client";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasTitle,
  OffcanvasBody,
} from "react-bootstrap";


const OffcanvasSide = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="secondary" className="navButton" onClick={handleShow}>
        <i className="bi bi-list"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose} scroll={true}>
        <OffcanvasHeader closeButton>
          <OffcanvasTitle>Offcanvas</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};
export default OffcanvasSide;
