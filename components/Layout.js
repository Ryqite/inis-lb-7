import Link from 'next/link'
import { Container, Nav, Navbar } from 'react-bootstrap'
import CartIcon from './CartIcon'

export default function Layout({ children }) {
  return (
    <div className="bg-body-tertiary min-vh-100">
      <Navbar bg="white" className="shadow-sm mb-4">
        <Container>
          <Navbar.Brand as={Link} href="/" className="fw-bold text-primary fs-3">
            SampleShop
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/products">
              Каталог
            </Nav.Link>
          </Nav>
          <CartIcon />
        </Container>
      </Navbar>

      <Container as="main" className="pb-5">
        {children}
      </Container>
    </div>
  )
}
