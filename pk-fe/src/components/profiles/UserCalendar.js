import { Container, Card } from "react-bootstrap"
import { useState, useEffect } from "react";
import axios from "axios";

function UserCalendar() {
    const [appointment, setAppointment] = useState([]);
    const appointment1 = [
        {
            id: 1,
            appointmentHour: "7:00",
            appointmentDay: "11/11/2022",
            content: "lich kham tai mui hong",
            status: true
        },
        {
            id: 2,
            appointmentHour: "7:00",
            appointmentDay: "11/11/2022",
            content: "lich kham tai mui hong",
            status: false
        },
        {
            id: 3,
            appointmentHour: "7:00",
            appointmentDay: "11/11/2022",
            content: "lich kham tai mui hong",
            status: true
        },

    ];

    const isStatus = () => {
        if (appointment1.status === true) {
            return (
                <Card bg="sucess" text="white" className="text-center justify-content-center" style={{ width: '7rem', height: '3rem' }}>
                    <Card.Text>Đã đặt</Card.Text>
                </Card>
            )
        } else {
            <Card bg="danger" text="white" className="text-center justify-content-center" style={{ width: '7rem', height: '3rem' }}>
                <Card.Text>Đã hủy</Card.Text>
            </Card>
        }
    }

    useEffect(() => {
        axios
            .get(`/user/calendar/1`, {

            })
            .then(res => setAppointment(res.data))
            .catch(error => console.log(error));
        
        isStatus();
    }, []);

    return (
        <Container className="w-50 h-100 justify-content-center d-flex position-relative flex-column mt-2">
            <h2 className="mx-5 text-center">Lịch sử đặt khám</h2>
            {appointment1?.map((item) => (
                <Card key={item.id} className="mt-3">
                    <Card.Header>{item.appointmentHour}, {item.appointmentDay}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {item.content}
                        </Card.Text>
                        {isStatus()}
                    </Card.Body>
                </Card>
            ))}
        </Container>
    )
}

export default UserCalendar;