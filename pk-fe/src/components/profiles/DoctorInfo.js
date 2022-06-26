import { Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function DoctorInfo() {
    const baseURL = "https:localhost:3000/users"
    const [doctor, setDoctor] = useState([]);

    const doctorInfo = (id) => {
        axios
            .get(`${baseURL}/${id}`)
            .then((res) => {
                setDoctor(res.data);
            })
            .catch((error) => console.log(error)
            );
    }

    useEffect(() => {
        doctorInfo();
    }, []);

    return (
        <Container>
            <div className="flex-row mt-4">
                <Link to={"/"}>Trang chủ</Link> / Thông tin cá nhân
            </div>
            <div className="text-center">
                <h2>THÔNG TIN CÁ NHÂN</h2>
            </div>
            <div className="align-items-center d-flex justify-content-center">
                <div className="col-md-8 ">
                    <Form className="row mt-3 ">
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Tên đăng nhập</Form.Label>
                            <Form.Control type="text" value={doctor.username} disabled />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Họ tên</Form.Label>
                            <Form.Control type="text" value={doctor.name} disabled />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control type="number" value={doctor.phoneNumber} disabled />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={doctor.email} disabled />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Ngày sinh</Form.Label>
                            <Form.Control type="text" value={doctor.dateOfBirth} disabled />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control type="text" value={doctor.address} disabled />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Chuyên khoa</Form.Label>
                            <Form.Control type="text" value={doctor.specialty} disabled />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Kinh nghiệm làm việc</Form.Label>
                            <Form.Control as="textarea" rows={6} value={doctor.exp} disabled />
                        </Form.Group>
                        <div className="mt-1 text-center">
                            <Button type="submit">
                                <Link to={"/doctor/edit"}>
                                    Chỉnh sửa
                                </Link>
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </Container>
    )

}
export default DoctorInfo;