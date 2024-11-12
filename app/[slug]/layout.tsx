import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "@/app/brandtv/globals.scss";

export default async function Layout({
  children,
}: //recommended,
//youmightlike,
{
  children: React.ReactNode;
  // recommended: React.ReactNode;
  //youmightlike: React.ReactNode;
}) {
  // const params = await props.params;

  return (
    <>
      <Header />

      <Container className="px-lg-5">
        <div className="row gx-lg-5">
          <div className="col-md-12">
            <div>{children}</div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
