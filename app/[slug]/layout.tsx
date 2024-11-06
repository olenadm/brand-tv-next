import { Container } from "react-bootstrap";
// import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
      <Header />

      <Container className="px-lg-5">
        <div className="row gx-lg-5">
          <div className="col-md-8 px-lg-3 mt-4">
            <div>{children}</div>
          </div>
          <div className="col-md-4 px-lg-3 mt-4">{youmightlike}</div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
