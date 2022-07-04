import { Container, Row, Col, Navbar } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import AddDoctor from "./AddDoctor";
import ListDoctor from "./ListDoctor";
import ListService from "./ListService";
import ListUser from "./ListUser";

function Admin() {
    return (
        <div>
            <Row className="h-auto">
                <Col xs={2} className="admin-left-col">
                    <Navbar className="flex-column" bg="dark" variant="dark">
                        <Navbar.Brand href="/admin/list-users">Danh sách khách hàng</Navbar.Brand>
                        <Navbar.Brand href="/admin/list-doctors">Danh sách bác sĩ</Navbar.Brand>
                        <Navbar.Brand href="/admin/add-doctor">Thêm bác sĩ</Navbar.Brand>
                        {/* <Navbar.Brand href="/admin/list-services">Danh sách dịch vụ</Navbar.Brand> */}
                    </Navbar>
                </Col>

                <Col>
                    <Container className="mt-3">
                        <Routes>
                            <Route path="list-users" element={<ListUser />} />
                            <Route path="list-doctors" element={<ListDoctor />} />
                            <Route path="add-doctor" element={<AddDoctor />} />
                            <Route path="list-services" element={<ListService />} />
                        </Routes>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default Admin;