import { Navbar, NavbarBrand } from 'reactstrap';

export interface Props {
  city: string;
}

const Header = ({ city } :Props) => {
  return (
    <Navbar dark color="primary" sticky="top" expand="md" className="header">
      <NavbarBrand className="ms-5" href="/">
        <h1 className="mt-1">Weather for {city}</h1>
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
