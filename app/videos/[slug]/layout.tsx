"use client";

import BrandsFooter from "@/app/components/BrandsFooter";
import BrandsHeader from "@/app/components/BrandsHeader";
import { Container } from "react-bootstrap";
import { Racing_Sans_One } from "next/font/google";
const racing = Racing_Sans_One({ weight: "400", subsets: ["latin"] });
import "@/app/replay/globals.scss";
import { useState } from "react";
import ModalForm from "@/app/components/ui/ModalForm";
import LoginModal from "@/app/components/ui/LoginModal";

export default function Layout({
  children,
}: //recommended,
// youmightlike,
{
  children: React.ReactNode;
  // recommended: React.ReactNode;
  // youmightlike: React.ReactNode;
}) {
  // const params = await props.params;
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  return (
    <>
      <style jsx global>{`
        h1,
        h2,
        h3,
        h4 {
          font-family: ${racing.style.fontFamily};
        }
      `}</style>
      <BrandsHeader handleShow={handleShow} handleShowLogin={handleShowLogin} />

      <Container>
        <div className="row gx-lg-5">
          <div className="col-md-12 px-lg-4 mt-4">
            <div>{children}</div>
          </div>
        </div>
      </Container>
      <BrandsFooter />
      <ModalForm handleClose={handleClose} show={show} />
      <LoginModal handleClose={handleCloseLogin} show={showLogin} />
    </>
  );
}
