import { Container, Card, Button } from "react-bootstrap"
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

function DoctorCalendar() {
    const [calendar, setCalendar] = useState("");

    const doctorCalendar = (id) => {
        axios
            .get(`doctor/calendar/${id}`)
            .then((res) => {
                setCalendar(res.data)
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        doctorCalendar();
    }, []);

    return (
        <Container>
            <div className="mt-5 text-center">
                <h2>Lịch khám hôm nay</h2>
            </div>
            <Container className="mt-5 w-75 h-25">
                {calendar?.map((cal) => (
                    <Card>
                        <Card.Header as="h5">{cal.appointmentHour}, {cal.customerName}</Card.Header>
                        <Card.Body>
                            <Card.Title>Khách hàng: {cal.customerName}</Card.Title>
                            <Card.Text>
                                Giờ khám: {cal.appointmentHour}
                            </Card.Text>
                            <Card.Text>
                                Triệu chứng: {cal.symptom}
                            </Card.Text>
                            <Button>
                                <Link to={'/user-health'}>
                                    Xem hồ sơ bệnh án
                                </Link>
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </Container>
    )
}

export default DoctorCalendar;