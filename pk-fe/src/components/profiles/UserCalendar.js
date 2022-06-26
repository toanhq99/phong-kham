import { Container, Card } from "react-bootstrap"
import { useState, useEffect } from "react";
import axios from "axios";

function UserCalendar() {
    const [appointment, setAppointment] = useState([]);
    const appointment1 = {
        id : 1,
        appointmentHour : "7:00",
        appointmentDay : "11/11/2022",
        content: "lich kham tai mui hong",
        status : true
    }

    useEffect(() => {
        axios
            .get(`/user/calendar/1`, {
                
            })
            .then(res => setAppointment(res.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <Container className="w-50 h-100 justify-content-center d-flex position-relative flex-column mt-2">
            <h2 className="mx-5 text-center">Lịch sử đặt khám</h2>
            {/* {appointment?.map((item) => ( */}
                <Card key={appointment1.id}>
                    <Card.Header>{appointment1.appointmentHour}, {appointment1.appointmentDay}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {appointment1.content}
                        </Card.Text>
                        <Card bg="danger" text="white" className="text-center justify-content-center" style={{ width: '7rem', height: '3rem' }}>
                            <Card.Text>{appointment1.status}</Card.Text>
                        </Card>
                    </Card.Body>
                </Card>
            {/* ))} */}
        </Container>
    )
}

export default UserCalendar;