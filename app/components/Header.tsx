import { Navbar, Container, NavbarBrand } from "react-bootstrap";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <Navbar className="bg-body-tertiary" fixed='top' expand='lg'>
      <Container>
        <NavbarBrand href="#home">
          <Image src="/brand-tv-banner.jpeg" alt="Logo" className="logo" width={200} height={61} />
        </NavbarBrand>
      </Container>
    </Navbar>
  );
};

export default Header;
