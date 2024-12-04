import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
// import OffcanvasSide from "./sidebar/Offcanvas";

const BrandsHeader = (props: {
  handleLogin: () => void;
  //handleShowLogin: () => void;
  login: boolean;
}) => {
  const { login, handleLogin } = props;
  const branding = "replay.png";
  return (
    <>
      <Navbar
        className="bg-dark"
        collapseOnSelect
        data-bs-theme="dark"
        fixed="top"
        expand="lg"
      >
        <Container>
          {/*<OffcanvasSide dark={true} branding={branding} />*/}
          <Link href="/replay" className="navbar-brand" scroll={false}>
            <Image
              src={`/${branding}`}
              alt="Logo"
              className="logo ms-md-4 ms-lg-0"
              width={200}
              height={44}
            />
          </Link>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="ms-auto  nav nav-pills nav-fill">
              <a href="https://replaysportscards.com" className="nav-link px-3" >
                <i className="bi bi-house-check me-2"></i> Home
              </a>

              <a
                href="https://replaysportscards.com/shop"
                className="nav-link px-3"
              >
                Shop
              </a>

              <Link href="/replay/" className="nav-link active px-3 " >
                <i className="bi bi-play-circle me-2"></i> Community Channel
              </Link>
            </Nav>
            <Nav className="ms-auto nav">
            
              {!login &&   <a
                href="#login"
                className="nav-link px-3 d-none d-sm-block"
              >
                Login
              </a> }

              
              {login && (
                <NavDropdown
                  title="Hi, username!"
                  id="collapsible-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.2">
                    <i className="bi bi-star-fill me-2"></i> Loyalty Points
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4" eventKey='1'>
                    <i className="bi bi-gear-wide-connected me-2"></i> Settings
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item eventKey='2'>
                    <button
                      className="btn btn-primary w-100"
                      onClick={handleLogin}
                    >
                      <i className="bi bi-gear-wide-connected me-2"></i> Log out
                    </button>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default BrandsHeader;
