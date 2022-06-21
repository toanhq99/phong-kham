import { Container, Row, Col, Navbar } from "react-bootstrap";

function Admin() {
    return (
        <Row className="h-auto">
            <Col xs={2} className="admin-left-col">
                <Navbar className="flex-column" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Danh sách khách hàng</Navbar.Brand>
                    <Navbar.Brand>Danh sách bác sĩ</Navbar.Brand>
                    <Navbar.Brand>Danh sách dịch vụ</Navbar.Brand>
                    <Navbar.Brand>Thêm bác sĩ</Navbar.Brand>
                </Navbar>
            </Col>
            <Col>
                <Container className="mt-3">
                    2 of 2
                </Container>
            </Col>
        </Row>
    )
}

export default Admin;