"use client";

import BrandsFooter from "@/app/components/BrandsFooter";
import BrandsHeader from "@/app/components/BrandsHeader";
import { Container } from "react-bootstrap";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

import "@/app/replay/globals.scss";
import { useState } from "react";
// import ModalForm from "@/app/components/ui/ModalForm";
// import LoginModal from "@/app/components/ui/LoginModal";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [login, setLogin] = useState(false);

  const handleLogin = () => setLogin((login) => !login);
  // const params = await props.params;
  // const [show, setShow] = useState(false);
  // const [showLogin, setShowLogin] = useState(false);

  /* const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true); */

  return (
    <div className={roboto.className}>
      <BrandsHeader login={login} handleLogin={handleLogin} />

      <Container>
        <div className="row gx-lg-5">
          <div className="col-md-12 px-lg-4 mt-4">
            <div>{children}</div>
          </div>
        </div>
      </Container>
      <BrandsFooter />
      {/* <ModalForm handleClose={handleClose} show={show} />
      <LoginModal handleClose={handleCloseLogin} show={showLogin} /> */}
    </div>
  );
}
