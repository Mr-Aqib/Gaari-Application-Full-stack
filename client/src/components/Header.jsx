import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <Navbar expand="lg" className="container rounded-pill mt-2 bg-body-tertiary ">
      <Container >
        <Navbar.Brand href="#home">Gaari</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto d-flex align-items-center mx-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
            <Nav.Link href="#link">Services</Nav.Link>
            
              
            
            <Nav.Link style={{backgroundColor:'lightgray'}}  className=' border d-flex rounded-pill align-items-center'>
              <span className='mx-2'> <CiSearch  size={'1.5rem'}  /></span>
             
                      <form >
            <input style={{width : "300px"}} type="text" placeholder='Lc 570' className='rounded-pill form-control bg-transparent  border-0  col-xl-12 col-12' />
                      </form>
            </Nav.Link>
           
                  </Nav>
                   <Nav.Link >
                      <Button className='my-3 header-btn mx-auto d-flex rounded-pill px-4' >
                          Login
                      </Button>
                  </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;