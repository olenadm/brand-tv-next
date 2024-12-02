"use client";
import { TabGroup } from "../components/ui/TabGroup";
import { Col, Container, Row } from "react-bootstrap";

import HeroIndividual from "../components/HeroIndividual";
import ModalForm from "../components/ui/ModalForm";

import { categories } from "../api/categories/data";
import BrandsHeader from "../components/BrandsHeader";
import BrandsFooter from "../components/BrandsFooter";
import { Racing_Sans_One } from "next/font/google";
const racing = Racing_Sans_One({ weight: "400", subsets: ["latin"] });

import "./globals.scss";
import { useState } from "react";
import LoginModal from "../components/ui/LoginModal";
import CreateAndShare from "../components/ui/CreateAndShare";

export default function Layout({ children }: { children: React.ReactNode }) {
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

      <HeroIndividual handleShow={handleShow}  />
      <Container>
        <Row>
          <Col>
            {" "}
            <CreateAndShare />
          </Col>
        </Row>
      </Container>

      <section className="rounded-top-5 mainsection bg-white">
        <Container className="px-lg-5 mt-3">
          <div className="row">
            <div className="col px-lg-3 mt-lg-4">
              <TabGroup
                path="/replay"
                items={[
                  {
                    text: "All",
                  },
                  ...categories.map((x) => ({
                    text: x.name,
                    slug: x.slug,
                  })),
                ]}
              />

              <div>{children}</div>
            </div>
          </div>
        </Container>
      </section>
      <BrandsFooter />
      <ModalForm handleClose={handleClose} show={show} />
      <LoginModal handleClose={handleCloseLogin} show={showLogin} />
    </>
  );
}
