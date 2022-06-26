import { Container, Card, Button, Form } from "react-bootstrap"
import { useState } from "react";
import axios from "axios";

function BookingInfo() {
    const [symptom, setSymptom] = useState("");
    const bookInfo = {
        name: "Hà Quang Toàn",
        appointmentHour: "7:00",
        appointmentDay: "11/11/2022",
        content: "Tư vấn với bác sĩ Hà Quang Toàn",
        price: 500000,
        symptom: symptom
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(bookInfo.name + bookInfo.appointmentHour+ bookInfo.appointmentDay + bookInfo.content + bookInfo.price + symptom);

        axios
            .post('/dat-lich/thong-tin-dat-lich', bookInfo)
            .then((res) => console.log(res))
            .catch((error) => console.log(error)
            );
    };

    return (
        <Container>
            <div className="mt-5 text-center">
                <h2>Thông tin đặt khám</h2>
            </div>
            <Container className="mt-5 w-75">
                <Card onSubmit={handleSubmit}>
                    <Card.Header as="h5">Khách hàng: {bookInfo.name}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Giờ hẹn: {bookInfo.appointmentHour}
                        </Card.Text>
                        <Card.Text>
                            Ngày khám: {bookInfo.appointmentDay}
                        </Card.Text>
                        <Card.Text>
                            {bookInfo.content}
                        </Card.Text>
                        <Card.Text>
                            Giá dịch vụ: {bookInfo.price}đ
                        </Card.Text>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Triệu chứng</Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={(e) => setSymptom(e.target.value)} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Xác nhận
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
    )
}

export default BookingInfo;