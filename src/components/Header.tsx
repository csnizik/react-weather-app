import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {
  return (
    <Navbar dark color="primary" sticky="top" expand="md" className="header">
      <NavbarBrand className="ms-5" href="/">
        <h1 className="mt-1">My Weather</h1>
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
