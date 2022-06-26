import { Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useParams, useEffect } from "react";
import axios from "axios";

function UserInfo() {
    const baseURL = "https:localhost:3000/users"
    const { id } = useParams();
    const [user, setUser] = useState([]);

    const userHealth = () => {
        axios
        .get(`${baseURL}/${id}`)
        .then((res) => {
            setUser(res.data);
        })
        .catch((error) => console.log(error));
    }

    useEffect(() => {
        userHealth();
    }, []);

    return (
        <Container>
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
                            <Form.Control type="text" value={user.username} disabled />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control type="number" value={user.username} disabled />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={user.username} disabled />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Ngày sinh</Form.Label>
                            <Form.Control type="date" value={user.username} disabled />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control type="text" value={user.username} disabled />
                        </Form.Group>
                        <div className="mt-5 text-center">
                            <Button type="submit">Chỉnh sửa</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default UserInfo;