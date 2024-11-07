"use client";
import React, { useState } from "react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasTitle,
  OffcanvasBody,
} from "react-bootstrap";

import Image from "next/image";

import styles from "./leftoffcanvas.module.css";

const OffcanvasSide = (props: { dark: boolean; branding: string }) => {
  const { dark, branding } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const buttonColor = dark ? "white" : "dark";
  return (
    <>
      <button className="navButton text-center" onClick={handleShow}>
        <i className="bi bi-list"></i>
      </button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        scroll={true}
        className={` text-bg-dark ${styles.offcanvas}`}
      >
        <OffcanvasHeader closeButton closeVariant={buttonColor}>
          <OffcanvasTitle>
            {" "}
            <Image
              src={`/${branding}`}
              alt="Logo"
              className="logo img-fluid"
              width={200}
              height={44}
            />
          </OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <div className="list-group list-group-flush">
            <a
              href="#"
              className="list-group-item list-group-item-action rounded-4 border-0"
              aria-current="true"
            >
              <i className="bi bi-house-check me-2"></i> Home
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action rounded-4 border-0"
            >
              <i className="bi bi-bell me-2"></i> A second link item
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action rounded-4 border-0"
            >
              <i className="bi bi-gear-wide-connected me-2"></i> A third link item
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action rounded-4 border-0"
            >
              <i className="bi bi-person-video2 me-2"></i> A fourth link item
            </a>
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};
export default OffcanvasSide;
