import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Gaari</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex align-items-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
                      <Nav.Link href="#link">Services</Nav.Link>
                      <Nav.Link>
                      <form >
            <input style={{width : "500px"}} type="text" placeholder='Lc 570' className='rounded-pill form-control p-2  col-xl-12 col-12' />
                      </form>
                      </Nav.Link>
                  </Nav>
                  <Nav.Link className=''>
                      <Button className='rounded-pill px-4' >
                          Login
                      </Button>
                  </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;