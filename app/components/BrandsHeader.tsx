import { Navbar, Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import OffcanvasSide from "./sidebar/Offcanvas";

const BrandsHeader: React.FC = () => {
  const branding = "replay.png";
  return (
    <Navbar
      className="bg-dark"
      collapseOnSelect
      data-bs-theme="dark"
      fixed="top"
      expand="lg"
    >
      <Container>
        <OffcanvasSide dark={true} branding={branding} />
        <Link
          href="/replay"
          className="navbar-brand"
          scroll={false}
        >
          <Image
            src={`/${branding}`}
            alt="Logo"
            className="logo ms-md-4 ms-lg-0"
            width={200}
            height={44}
          />
        </Link>

        <ul className="ms-auto  nav nav-pills nav-fill" >
          <li className='nav-item'>
            <a href="https://replaysportscards.com" className="nav-link">
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href="https://replaysportscards.com/shop" className="nav-link">
              Shop
            </a>
          </li>
          <li className='nav-item'>
            <Link href="/replay/" className="nav-link active">
              Community Channel
            </Link>
          </li>
        </ul>
      </Container>
    </Navbar>
  );
};

export default BrandsHeader;
