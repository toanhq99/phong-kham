import { Container, Card, Button } from "react-bootstrap"
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

function DoctorCalendar() {
    const [calendar, setCalendar] = useState([]);

    const doctor = JSON.parse(localStorage.getItem("accessToken"));

    useEffect(() => {
        axios
            .get('http://localhost:8084/TimeOder/getAllTimeOderByDoctorId/' + doctor.id)
            .then((res) => {
                setCalendar(res.data.data);
                console.log(res.data.data);
            })
            .catch((err) => console.log(err));
    },[doctor.id]);

    return (
        <Container>
            <div className="mt-4 text-center">
                <h2>Lịch khám hôm nay</h2>
            </div>
            <Container className="mt-4 w-75 h-25">
                {calendar?.map((cal) => (
                    <Card key={cal.id} className="mt-3">
                        <Card.Header as="h5">{cal.time}</Card.Header>
                        <Card.Body>
                            <Card.Title>Khách hàng: {cal.user.fullName}</Card.Title>
                            <Card.Text>
                                Giờ khám: {cal.time}
                            </Card.Text>
                            <Card.Text>
                                Triệu chứng: {cal.symptom}
                            </Card.Text>
                            <Link to={'/user/health/' + cal.user.id}>
                                <Button onClick={localStorage.setItem("timeId", cal.id)}>
                                    Xem hồ sơ bệnh án
                                </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </Container>
    )
}

export default DoctorCalendar;