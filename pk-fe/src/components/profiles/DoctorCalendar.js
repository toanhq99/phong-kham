import { Container, Card, Button } from "react-bootstrap"

function DoctorCalendar() {
    return (
        <Container>
            <div className="mt-5 text-center">
                <h2>Lịch khám hôm nay</h2>
            </div>
            <Container className="mt-5 w-75 h-25">
                <Card>
                    <Card.Header as="h5">07:00, Hà Quang Toàn</Card.Header>
                    <Card.Body>
                        <Card.Title>Khách hàng: Hà Quang Toàn</Card.Title>
                        <Card.Text>
                            Giờ khám: 07:00, 22/2/2022
                        </Card.Text>
                        <Card.Text>
                            Khoa: Tai Mũi Họng
                        </Card.Text>
                        <Card.Text>
                            Triệu chứng: Đau họng
                        </Card.Text>
                        <Button>Xem hồ sơ bệnh án</Button>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
    )
}

export default DoctorCalendar;