import { Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function DoctorInfo() {
    const [doctor, setDoctor] = useState([]);

    useEffect(() => {
        const doctor = JSON.parse(localStorage.getItem("accessToken"));
        if (doctor) {
            setDoctor(doctor);
        }
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
                            <Form.Control type="text" value={doctor.fullName} disabled />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3 blog-checkbox">
                            <Form.Label>Giới tính: </Form.Label>
                            <div className="d-flex">
                                <Form.Check className="me-3" type="radio" checked={doctor.sex === true} label="Nam" readOnly />
                                <Form.Check className="me-3" type="radio" checked={doctor.sex === false} label="Nữ" readOnly />
                            </div>
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
                            <Form.Control type="date" value={doctor.birth} disabled />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control type="text" value={doctor.address} disabled />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Chuyên khoa</Form.Label>
                            <Form.Control type="text" value={doctor.department} disabled />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Kinh nghiệm làm việc</Form.Label>
                            <Form.Control as="textarea" rows={6} value={doctor.department} disabled />
                        </Form.Group>
                        <div className="mt-1 text-center">
                            <Link to={"/doctor/info/edit/"}>
                                <Button type="submit">
                                    Chỉnh sửa
                                </Button>
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        </Container>
    )

}
export default DoctorInfo;