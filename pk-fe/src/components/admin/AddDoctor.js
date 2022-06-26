import { Container, Button, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function AddDoctor() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [address, setAddress] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [exp, setExp] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username + password);

        axios
            .post(`/add-doctor`, {
                username: username,
                password: password,
                name: name,
                phoneNumber: phoneNumber,
                email: email,
                dateOfBirth: dateOfBirth,
                address: address,
                specialty: specialty,
                exp: exp
            })
            .then((res) => console.log(res))
            .catch((error) => console.log(error)
            );
    };

    return (
        <Container>
            <div className="text-center">
                <h2>THÊM BÁC SĨ</h2>
            </div>
            <div className="align-items-center d-flex justify-content-center">
                <div className="col-md-8 ">
                    <Form className="row mt-3" onSubmit={handleSubmit}>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Tên đăng nhập</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(event) => setUsername(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Mật khẩu</Form.Label>
                            <Form.Control
                                type="password"
                                onChange={(event) => setPassword(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Họ tên</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(event) => setName(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control
                                type="number"
                                onChange={(event) => setPhoneNumber(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                onChange={(event) => setEmail(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Ngày sinh</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(event) => setDateOfBirth(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(event) => setAddress(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Chuyên khoa</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(event) => setSpecialty(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Kinh nghiệm làm việc</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={6}
                                onChange={(event) => setExp(event.target.value)} />
                        </Form.Group>
                        <div className="mt-1 text-center">
                            <Button type="submit">Xác nhận</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </Container>
    )

}
export default AddDoctor;