import { Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function EditDoctorInfo() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [sex, setSex] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [address, setAddress] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [exp, setExp] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [nameError, setNameError] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [dateOfBirthError, setDateOfBirthError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [specialtyError, setSpecialtyError] = useState("");
    const [expError, setExpError] = useState("");

    const handleValidation = () => {
        let formIsValid = true;

        if (!username) {
            formIsValid = false;
            setUsernameError("Tên đăng nhập không được để trống");
            return false;
        } else {
            setUsernameError("");
            formIsValid = true;
        }

        if (!password) {
            formIsValid = false;
            setPasswordError("Mật khẩu không được để trống");
            return false;
        } else {
            setPasswordError("");
            formIsValid = true;
        }

        if (!name) {
            formIsValid = false;
            setNameError("Tên không được để trống");
            return false;
        } else {
            setNameError("");
            formIsValid = true;
        }

        if (!phoneNumber) {
            formIsValid = false;
            setPhoneNumberError("Số điện thoại không được để trống");
            return false;
        } else {
            setPhoneNumberError("");
            formIsValid = true;
        }

        if (!email) {
            formIsValid = false;
            setEmailError("Email không được để trống");
            return false;
        } else {
            setEmailError("");
            formIsValid = true;
        }

        if (!dateOfBirth) {
            formIsValid = false;
            setDateOfBirthError("Ngày sinh không được để trống");
            return false;
        } else {
            setDateOfBirthError("");
            formIsValid = true;
        }

        if (!address) {
            formIsValid = false;
            setAddressError("Địa chỉ không được để trống");
            return false;
        } else {
            setAddressError("");
            formIsValid = true;
        }

        if (!specialty) {
            formIsValid = false;
            setSpecialtyError("Chuyên khoa không được để trống");
            return false;
        } else {
            setSpecialtyError("");
            formIsValid = true;
        }

        if (!exp) {
            formIsValid = false;
            setExpError("Kinh nghiệm không được để trống không được để trống");
            return false;
        } else {
            setAddressError("");
            formIsValid = true;
        }

        return formIsValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleValidation();
        console.log(username + password + name + phoneNumber + email + dateOfBirth + address)
        axios
            .put(`http://localhost:8084/User/update/1`, {
                fullName: name,
                phoneNumber: phoneNumber,
                sex: sex,
                birth: dateOfBirth,
                address: address
            })
            .then((res) => console.log(res))
            .catch((error) => console.log(error)
            );
    };

    useEffect(() => {
        axios
            .get(`http://localhost:8084/User/getDoctorById/1`, {
                fullName: name,
                phoneNumber: phoneNumber,
                sex: sex,
                birth: dateOfBirth,
                address: address
            })
            .then((res) => console.log(res))
            .catch((error) => console.log(error)
            );
    });
    return (
        <Container>
            <div className="flex-row mt-4">
                <Link to={"/"}>Trang chủ</Link> / Thông tin bác sĩ / Sửa thông tin bác sĩ
            </div>
            <div className="text-center">
                <h2>SỬA THÔNG TIN BÁC SĨ</h2>
            </div>
            <div className="align-items-center d-flex justify-content-center">
                <div className="col-md-8 ">
                    <Form className="row mt-3 " onSubmit={handleSubmit}>
                        <Form.Group className="col-md-12 mb-3" >
                            <Form.Label>Tên đăng nhập</Form.Label>
                            <Form.Control type="text" onChange={(e) => setUsername(e.target.value)} />
                            <small className="text-danger form-text">
                                {usernameError}
                            </small>
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Mật khẩu</Form.Label>
                            <Form.Control type="text" onChange={(e) => setPassword(e.target.value)} />
                            <small className="text-danger form-text">
                                {passwordError}
                            </small>
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Họ tên</Form.Label>
                            <Form.Control type="text" onChange={(e) => setName(e.target.value)} />
                            <small className="text-danger form-text">
                                {nameError}
                            </small>
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3 blog-checkbox">
                            <Form.Label>Giới tính: </Form.Label>
                            <div className="d-flex">
                                <Form.Check className="me-3" type="radio" onChange={() => setSex(true)} label="Nam" />
                                <Form.Check className="me-3" type="radio" onChange={() => setSex(false)} label="Nữ" />
                            </div>
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control type="number" onChange={(e) => setPhoneNumber(e.target.value)} />
                            <small className="text-danger form-text">
                                {phoneNumberError}
                            </small>
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} />
                            <small className="text-danger form-text">
                                {emailError}
                            </small>
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Ngày sinh</Form.Label>
                            <Form.Control type="text" onChange={(e) => setDateOfBirth(e.target.value)} />
                            <small className="text-danger form-text">
                                {dateOfBirthError}
                            </small>
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control type="text" onChange={(e) => setAddress(e.target.value)} />
                            <small className="text-danger form-text">
                                {addressError}
                            </small>
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Chuyên khoa</Form.Label>
                            <Form.Control type="text" onChange={(e) => setSpecialty(e.target.value)} />
                            <small className="text-danger form-text">
                                {specialtyError}
                            </small>
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Kinh nghiệm làm việc</Form.Label>
                            <Form.Control as="textarea" rows={6} onChange={(e) => setExp(e.target.value)} />
                            <small className="text-danger form-text">
                                {expError}
                            </small>
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
export default EditDoctorInfo;