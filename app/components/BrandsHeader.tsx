import { Navbar, Container, NavLink, Nav } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import OffcanvasSide from "./sidebar/Offcanvas";

const BrandsHeader: React.FC = () => {
  return (
    <Navbar
      className="bg-dark"
      collapseOnSelect
      data-bs-theme="dark"
      fixed="top"
      expand="lg"
    >
     
      <Container className="px-xl-3">
      <OffcanvasSide />
        <Link href="/replay" className="navbar-brand mx-auto mx-md-0 ms-md-3" scroll={false}>
          <Image
            src="/replay.png"
            alt="Logo"
            className="logo ms-md-4 ms-lg-0"
            width={200}
            height={44}
          />
        </Link>

        
        <Nav className="ms-auto d-none d-md-block">
          <NavLink href="" eventKey="4">
            Log In <i className="bi bi-arrow-right"></i>
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default BrandsHeader;
