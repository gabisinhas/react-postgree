import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <>
  <Navbar expand="lg" className="bg-body-tertiary"  bg="dark" data-bs-theme="dark">
      <Container>
      <Nav className="me-auto">
          <Nav.Link href='/createemployee'>Create Employee</Nav.Link>
          <Nav.Link href="/listEmployees">List All Employees</Nav.Link>
      </Nav>
      <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand href="#home">CRUD React + Node.js + PostgreSQL</Navbar.Brand>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default App
