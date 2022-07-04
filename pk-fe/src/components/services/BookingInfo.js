import { Container, Card, Button, Form } from "react-bootstrap"
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

function BookingInfo() {
    const [symptom, setSymptom] = useState("");
    const [user, setUser] = useState([]);
    const [bookInfo, setBookInfo] = useState([]);
    let navigate = useNavigate();
    const { id } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post(`http://localhost:8084/TimeOder/createTimeOder/${user.id}/${id}`, {
                time: bookInfo.day + "T" + bookInfo.hour+"Z",
                symptom: symptom
            })
            .then((res) => {
                console.log(res.data);
                localStorage.removeItem("bookingInfo");
                alert("Đặt lịch thành công")
                navigate("/doctor")
            })
            .catch((error) => console.log(error)
            );
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("accessToken"));
        if (user) {
            setUser(user);
        }

        const bookInfo = JSON.parse(localStorage.getItem("bookingInfo"));
        if (bookInfo) {
            setBookInfo(bookInfo);
        }
    }, []);

    if (!localStorage.getItem("accessToken")) {
        return (
            alert("Vui lòng đăng nhập để tiếp tục sử dụng dịch vụ"),
            navigate("/login")
        )
    }

    return (
        <Container>
            <div className="mt-5 text-center">
                <h2>Thông tin đặt khám</h2>
            </div>
            <Container className="mt-5 w-75">
                <Card onSubmit={handleSubmit}>
                    <Card.Header as="h5">Khách hàng: {user.fullName}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Giờ hẹn: {bookInfo.hour}
                        </Card.Text>
                        <Card.Text>
                            Ngày khám: {bookInfo.day}
                        </Card.Text>
                        <Card.Text>
                            Giá dịch vụ: 500000đ
                        </Card.Text>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Triệu chứng: </Form.Label>
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