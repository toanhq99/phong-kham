import { Container, Card, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserHealth() {
    return (
        <Container>
            <div className="flex-row">
                <Link to={"/"}>Trang chủ</Link> / Hồ sơ sức khỏe / Quang
            </div>
            <div className="text-center">
                <h2>HỒ SƠ SỨC KHỎE</h2>
            </div>
            <Container className="w-75 mt-4">
                <Dropdown>
                    <Card >
                        <Card.Header as="h5"  >
                            <div className="flex-row d-flex">
                                <div className="w-75">
                                    Ngày 1/1/2022, khám Tai mũi họng
                                </div>
                                <div className="w-25 justify-content-end">
                                    <Dropdown.Toggle />
                                </div>
                            </div>
                        </Card.Header>
                        <Dropdown.Menu className="w-100">
                            <Card.Body>
                                <Card.Title>Khám Tai Mũi Họng</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                            </Card.Body>
                        </Dropdown.Menu>
                    </Card>
                </Dropdown>
            </Container>
        </Container>
    )
}

export default UserHealth;