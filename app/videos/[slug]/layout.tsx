'use client'

import BrandsFooter from "@/app/components/BrandsFooter";
import BrandsHeader from "@/app/components/BrandsHeader";
// import Sidebar from "@/app/components/sidebar/Sidebar";
import { Container } from "react-bootstrap";
import { Racing_Sans_One } from "next/font/google";
const racing = Racing_Sans_One({ weight: "400", subsets: ["latin"] });
import '@/app/replay/globals.scss'

export default async function Layout({
  children,
  //recommended,
  youmightlike,
}: {
  children: React.ReactNode;
  // recommended: React.ReactNode;
  youmightlike: React.ReactNode;
}) {
  // const params = await props.params;

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
      <BrandsHeader />
     

      <Container>
        <div className="row gx-lg-5">
          <div className="col-md-8 px-lg-3 mt-4">
            <div>{children}</div>
          </div>
          <div className="col-md-4 px-lg-3 mt-4">{youmightlike}</div>
        </div>
      </Container>
      <BrandsFooter />
    </>
  );
}
