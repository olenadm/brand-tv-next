import {
  Navbar,
  Container,
 
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
      <Container className='px-md-4 px-lg-4 px-xl-3'>
        <Link href="/" className="navbar-brand">
          <Image
            src="/brand-tv-banner.png"
            alt="Logo"
            className="logo ms-md-4 ms-lg-0"
            width={170}
            height={56}
          />
        </Link>
        
     
          <Nav className="me-auto d-none d-sm-block">
            <Link href="/brand-tv#top" className="nav-link">
              Product
            </Link>
           
          </Nav>
          <Nav className="ms-auto">
            <NavLink href="" eventKey="4">
              Log In <i className="bi bi-arrow-right"></i>
            </NavLink>
          </Nav>
        
      </Container>
    </Navbar>
  );
};

export default Header;
