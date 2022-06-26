import { Button, Container, Form } from "react-bootstrap";
import { useState, useEffect, useParams } from "react";
import axios from "axios";

function DoctorDetail() {
    const baseURL = "https:localhost:3000/users"
    const { id } = useParams();
    const [doctor, setDoctor] = useState([]);

    const doctorInfo = () => {
        axios
        .get(`${baseURL}/${id}`)
        .then((res) => {
            setDoctor(res.data);
        })
        .catch((error) => console.log(error));
    }

    useEffect(() => {
        doctorInfo();
    }, []);
    
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
                        <h1 className="mb-3">{doctor.name}</h1>
                    </div>
                    <div className="doctor-text-more d-flex flex-column">
                        <div className="price-info mb-4">
                            <div className="text-align-center d-flex align-items-center justify-content-start">
                                <span className="price-number">{doctor.price}đ</span>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="specialize">{doctor.specialty}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Container className="d-flex mb-3 p-3">
                <Container className="px-3 pt-3 pb-4 time-booking">
                    <div className="group-time-picker">
                        <div className="head-time-picker">
                            <div className="label-time-picker">Lịch tư vấn trực tuyến</div>
                            <Form.Control className='mx-3 w-25' type='date' />
                        </div>
                        <Form.Group className="flex-row mb-4">
                            <Form.Check className="me-3" type="radio" name="isPublic" label="11:00" />
                            <Form.Check className="me-3" type="radio" name="isPublic" label="12:00" />
                        </Form.Group>
                    </div>
                    <Button type='submit' variant="success">Submit</Button>
                </Container>
            </Container>
            <Container className="mx-3 mt-3 mb-4 doctor-exp">
                <h4 className="mb-3">Kinh nghiệm khám chữa bệnh</h4>
                <pre className="text-content">
                    {doctor.exp}
                </pre>
            </Container>
        </Container>
    )
}
export default DoctorDetail;