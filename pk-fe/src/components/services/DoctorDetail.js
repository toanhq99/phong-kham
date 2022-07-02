import { Button, Container, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function DoctorDetail() {
    const { id } = useParams();
    const [doctor, setDoctor] = useState([]);
    const [bookDay, setBookDay] = useState("");
    const [bookHour, setBookHour] = useState("initialState");

    let today = new Date();

    let date = today.getFullYear() + "-0" + parseInt(today.getMonth() + 1) + "-0" + today.getDate();

    const getDoctor = () => {
        axios
            .get(`http://localhost:8084/User/getDoctorById/${id}`)
            .then((res) => {
                setDoctor(res.data.data);
            })
            .catch((error) => console.log(error));
    }

    const setTime = () => {
        localStorage.setItem("bookingInfo", JSON.stringify({
            hour: bookHour,
            day: bookDay
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTime();

    };

    useEffect(() => {
        getDoctor();
        setTime();
    });

    return (
        <Container className="py-6">
            <div className="d-flex align-items-center mb-3">
                <div className="d-flex position-relative justify-content-center align-items-center doctor-image">
                    <img
                        className="w-100 h-100"
                        src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/test_b6fdadb7_445d_4a6a_ac5c_0ad3c31cdd67.png"
                        alt="Pham Thi Bich Dao"
                    ></img>
                </div>
                <div className="doctor-text p-4">
                    <div className="doctor-text-head d-flex">
                        <h1 className="mb-3">{doctor.fullName}</h1>
                    </div>
                    <div className="doctor-text-more d-flex flex-column">
                        <div className="price-info mb-4">
                            <div className="text-align-center d-flex align-items-center justify-content-start">
                                <span className="price-number">500000đ</span>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="specialize">abc</div>
                        </div>
                    </div>
                </div>
            </div>
            <Container className="d-flex mb-3 p-3">
                <Container className="px-3 pt-3 pb-4 time-booking" >
                    <Form onSubmit={handleSubmit}>
                        <div className="group-time-picker">
                            <div className="head-time-picker">
                                <div className="label-time-picker">Lịch tư vấn trực tuyến</div>
                                <Form.Control className='mx-3 w-25' type='date' defaultValue={date} onChange={(e) => setBookDay(e.target.value)} />
                            </div>
                            <Form.Group className="d-flex mb-4">
                                <Form.Check className="me-3" type="radio" name="isPublic" label="11:00" onChange={(e) => setBookHour("11:00:00.00")} />
                                <Form.Check className="me-3" type="radio" name="isPublic" label="12:00" onChange={(e) => setBookHour("12:00:00.00")} />
                            </Form.Group>
                        </div>
                        <Link to={`/booking-info/${id}`}>
                            <Button type='submit' variant="success">Xác nhận</Button>
                        </Link>
                    </Form>
                </Container>
            </Container>
            <Container className="mx-3 mt-3 mb-4 doctor-exp">
                <h4 className="mb-3">Kinh nghiệm khám chữa bệnh</h4>
                <pre className="text-content">
                    abc
                </pre>
            </Container>
        </Container>
    )
}
export default DoctorDetail;