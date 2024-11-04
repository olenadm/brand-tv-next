import {
  Navbar,
  Container,
  NavbarToggle,
  NavbarCollapse,
  NavLink,
  Nav,
} from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <Navbar
      className="bg-body-tertiary"
      collapseOnSelect
      fixed="top"
      expand="lg"
    >
      <Container >
        <Link href="/" className="navbar-brand">
          <Image
            src="/brand-tv-banner.png"
            alt="Logo"
            className="logo"
            width={180}
            height={55}
          />
        </Link>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/brand-tv#top" className="nav-link">
              Product
            </Link>
           
          </Nav>
          <Nav className="ms-auto">
            <NavLink href="" eventKey="4">
              Log In <i className="bi bi-arrow-right"></i>
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default Header;
