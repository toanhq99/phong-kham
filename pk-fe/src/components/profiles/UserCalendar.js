import { Col, Container, Row, Card } from "react-bootstrap"

function UserCalendar() {
    return (
        <Container className="mx-5">
            <div className="mt-5">
                <h2>Lịch sử đặt lịch</h2>
            </div>
            <Container className="mt-5 w-75 h-25">
                <Row className="text-center mt-3">
                    <Col>7:00 11/1/2022</Col>
                    <Col xs={5}>
                        <h4>Quang</h4>
                        <div>Khám theo yêu cầu</div>
                    </Col>
                    <Col>
                        <Card bg="danger" text="white" className="w-25">
                            <Card.Text>Đã hủy</Card.Text>
                        </Card>
                    </Col>
                </Row>
                <Row className="text-center mt-3">
                    <Col>7:00 11/1/2022</Col>
                    <Col xs={5}>
                        <h4>Quang</h4>
                        <div>Khám theo yêu cầu</div>
                    </Col>
                    <Col>
                        <Card bg="danger" text="white" className="w-25 h-50">
                            <Card.Text>Đã hủy</Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default UserCalendar