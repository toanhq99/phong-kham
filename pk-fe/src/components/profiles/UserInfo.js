import { Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function UserInfo() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("accessToken"));
        if (user) {
            setUser(user);
        }
    }, []);

    return (
        <Container className="mt-4">
            <div className="flex-row">
                <Link to={"/"}>Trang chủ</Link> / Thông tin cá nhân
            </div>
            <div className="text-center">
                <h2>THÔNG TIN CÁ NHÂN</h2>
            </div>
            <div className="align-items-center d-flex justify-content-center">
                <div className="col-md-8 ">
                    <div className="row mt-3 ">
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Tên đăng nhập</Form.Label>
                            <Form.Control type="text" value={user.username} disabled />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Họ tên</Form.Label>
                            <Form.Control type="text" value={user.fullName} disabled />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3 blog-checkbox">
                            <Form.Label>Giới tính: </Form.Label>
                            <div className="d-flex">
                                <Form.Check className="me-3" type="radio" checked={user.sex === true} label="Nam" readOnly/>
                                <Form.Check className="me-3" type="radio" checked={user.sex === false} label="Nữ" readOnly />
                            </div>
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control type="number" value={user.phoneNumber} disabled />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={user.email} disabled />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Ngày sinh</Form.Label>
                            <Form.Control type="date" value={user.birth} disabled />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control type="text" value={user.address} disabled />
                        </Form.Group>
                        <div className="mt-3 text-center">
                            <Link to={"edit"}>
                                <Button type="submit" >
                                    Chỉnh sửa
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default UserInfo;