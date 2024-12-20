"use client";
import { TabGroup } from "../components/ui/TabGroup";
import { Container } from "react-bootstrap";

import HeroIndividual from "../components/HeroIndividual";

import { categories } from "../api/categories/data";
import BrandsHeader from "../components/BrandsHeader";
import BrandsFooter from "../components/BrandsFooter";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

import "./globals.scss";
import { useState } from "react";

import CreateAndShare from "../components/ui/CreateAndShare";
import JoinOurComunity from "../components/ui/JoinOurComunity";
import VideoList from "../components/ui/VideoList";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [login, setLogin] = useState(false);

  const handleLogin = () => setLogin((login) => !login);

  return (
    <div className={roboto.className}>
      <BrandsHeader login={login} handleLogin={handleLogin} />

      <HeroIndividual  />

      <CreateAndShare />

      <section className="rounded-top-5 mainsection bg-white p-2">
        <Container className="mt-3">
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
      <JoinOurComunity />
      <section className="bg-light py-5">
        <div className="container">
          <VideoList catName="More Videos" slug="videos/" catSlug="All" />
        </div>
      </section>
      <BrandsFooter />
      {/* <ModalForm handleClose={handleClose} show={show} />
      <LoginModal handleClose={handleCloseLogin} show={showLogin} />*/}
    </div>
  );
}
