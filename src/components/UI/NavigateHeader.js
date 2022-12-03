import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import topNav from '../../assests/Logo.png';
import classes from './NavigateHeader.module.css';
//Nav bar Using Bootstrap 
const NavigateHeader = () => {
  return (
    <Navbar expand="lg" className={classes['navg-bar']}>
      <Container>
        <Navbar.Brand  href="#home">
        <img 
              src={topNav}
              width="150"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mx-auto ">
            <Nav.Link href="#home" className={classes['nav-link']}>Home</Nav.Link>
            <Nav.Link href="#link"className={classes['nav-link']}>About us</Nav.Link>
            <Nav.Link href="#link"className={classes['nav-link']}>News</Nav.Link>
            <Nav.Link href="#link"className={classes['nav-link']}>Contact us</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="#home" className={classes['nav-link']}>Login</Nav.Link>
            <Nav.Link href="#link"className={classes['nav-link']}>Sign up</Nav.Link>
            <NavDropdown className={classes['nav-link']} title="EN" id="basic-nav-dropdown">
              
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
           
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigateHeader;
