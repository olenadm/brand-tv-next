'use client'
import { TabGroup } from "../components/ui/TabGroup";
import { Container } from "react-bootstrap";
// import Sidebar from "../components/sidebar/Sidebar";
import RecommendedVideoList from "@/app/components/ui/RecommendedVideoList";
import HeroIndividual from "../components/HeroIndividual";

import { categories } from "../api/categories/data";
import BrandsHeader from "../components/BrandsHeader";
import BrandsFooter from "../components/BrandsFooter";
import { Racing_Sans_One } from "next/font/google";
const racing = Racing_Sans_One({ weight: "400", subsets: ["latin"] });


import './globals.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
     <style jsx global>{`
        h1, h2, h3, h4 {
          font-family: ${racing.style.fontFamily};
        }
      `}</style>
    <BrandsHeader/>
     
      <HeroIndividual />

      <Container>
        <div className="row">
          <div className="col px-lg-3 mt-4">
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
            <RecommendedVideoList  slug='videos/promvideo'/>
          </div>
        </div>
      </Container>
      <BrandsFooter/>
    </>
  );
}