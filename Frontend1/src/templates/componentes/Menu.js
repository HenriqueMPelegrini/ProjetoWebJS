import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link} from "react-router-dom";


export default function Menu(props) {
    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand ><Link to="/">MENU</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                  <NavDropdown.Item> <Link to="/cadCliente">Cliente </Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item ><Link to="/cadFornecedor">Fornecedor </Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item ><Link to="/cadProduto">Produto </Link></NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <Link to="/venda">Vendas</Link>
          </Container>
        </Navbar>
      );
}