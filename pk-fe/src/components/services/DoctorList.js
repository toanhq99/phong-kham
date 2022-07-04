import { Container, Form, FormControl, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function DoctorList() {
    const [doctors, setDoctors] = useState([]);

    const doctorInfo = () => {
        axios
            .get(`http://localhost:8084/User/GetAllDoctor`)
            .then((res) => {
                console.log(res.data.data);
                setDoctors(res.data.data);
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        doctorInfo();
    }, []);

    return (
        <div className="w-100 h-100 pb-0">
            <div className="position-relative">
                <div height="228">
                    <Container className="h-100 d-flex flex-column py-5">
                        <div className=" justify-content-center row">
                            <div className="col-12">
                                <h1 className="text-center">Đặt khám trước qua Devfast</h1>
                                <p className="text-center">Để được tiếp đón ưu tiên viện hoặc được tư vấn với bác sĩ giỏi ngay tại nhà</p>
                                <div className="pt-3 ">
                                    <Form className="d-flex justify-content-center">
                                        <FormControl
                                            type="search"
                                            placeholder="Tìm bác sĩ..."
                                            className="w-50"
                                            aria-label="Search"
                                        />
                                    </Form>
                                </div>
                            </div>
                        </div>

                    </Container>
                </div>
            </div>
            <Container>
                <h2>Chọn bác sĩ</h2>
                <Container className="d-flex gap-3 flex-wrap justify-content-center my-4">
                    {doctors?.map((doctor) => (
                        <Card key={doctor.id} className="text-center" style={{ maxWidth: '100%', width: '24%', height: '25%' }}>
                            <div className="text-center">
                                <Card.Img variant="top" className="avatar" src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/test_b6fdadb7_445d_4a6a_ac5c_0ad3c31cdd67.png" />
                            </div>
                            <Card.Header as="h5" className="text-center">{doctor.fullName}</Card.Header>
                            <Card.Body>
                                <Card.Title>{doctor.department.title}</Card.Title>
                                <Card.Text>Giá khám: 300000đ</Card.Text>
                                <Link to={`detail/${doctor.id}`}>
                                    <Button variant="success">Đặt khám</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    ))}
                </Container>
            </Container>
        </div>
    )
}

export default DoctorList;