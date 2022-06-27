import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";

function AppHeader() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light">
            <Container>
                <Navbar.Brand href="/">
                    <Image src="https://devfast.us/images/devfast-logo.png" className="logo-img"></Image>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                    <Nav>
                        <Nav.Link href="/">Trang chủ</Nav.Link>
                        <Nav.Link eventKey={2} href="/bac-si">
                            Bác sĩ
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="/dich-vu">
                            Dịch vụ
                        </Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/login">Đăng nhập</NavDropdown.Item>
                            <NavDropdown.Item href="/register">Đăng kí</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default AppHeader;