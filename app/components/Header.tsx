/* eslint-disable @next/next/no-html-link-for-pages */

import { Navbar, Container, NavLink, Nav } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
// import OffcanvasSide from "./sidebar/Offcanvas";

const Header: React.FC = () => {
  return (
    <Navbar
      className="bg-body-tertiary"
      collapseOnSelect
      fixed="top"
      expand="lg"
    >
     
      <Container>
      
        <Link href="/brandtv" className="navbar-brand mx-auto mx-md-0 ms-md-3" scroll={false}>
          <Image
            src="/brand-tv-banner.png"
            alt="Logo"
            className="logo ms-md-4 ms-lg-0"
            width={170}
            height={56}
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

export default Header;
