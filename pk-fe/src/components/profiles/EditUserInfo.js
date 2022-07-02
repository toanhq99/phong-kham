import { Container, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function EditUserInfo() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [sex, setSex] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [address, setAddress] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [nameError, setNameError] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [dateOfBirthError, setDateOfBirthError] = useState("");
    const [addressError, setAddressError] = useState("");

    let navigate = useNavigate;

    const [user, setUser] = useState([]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("accessToken"));
        if (user) {
            setUser(user);
        }

        setUsername(user.username);
        setPassword(user.password);
        setName(user.fullName);
        setSex(user.sex);
        setPhoneNumber(user.phoneNumber);
        setEmail(user.email);
        setDateOfBirth(user.birth);
        setAddress(user.address);
    }, []);

    let formIsValid = true;

    const handleValidation = () => {

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

        return formIsValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleValidation();
        console.log(username + password + name + phoneNumber + email + dateOfBirth + address);
        axios
            .put(`http://localhost:8084/User/update/${user.id}`, {
                username: username,
                password: password,
                fullName: name,
                sex: sex,
                phoneNumber: phoneNumber,
                email: email,
                birth: dateOfBirth,
                address: address,
                level: user.level
            })
            .then((res) => {
                console.log(res.data);
                if (!formIsValid) {
                    alert("Hãy điền đủ thông tin!");
                } else {
                    alert("Cập nhật thông tin thành công!");
                    localStorage.setItem("accessToken", JSON.stringify(res.data.data));
                }

            })
            .catch((error) => console.log(error)
            );
    };

    return (
        <Container>
            <div className="flex-row">
                <Link to={"/"}>Trang chủ</Link>
                {" "}/{" "}
                <Link to={"/user/info"}>
                    Thông tin cá nhân
                </Link>
                {" "}/ Sửa thông tin cá nhân
            </div>
            <div className="text-center">
                <h2>SỬA THÔNG TIN CÁ NHÂN</h2>
            </div>
            <div className="align-items-center d-flex justify-content-center">
                <div className="col-md-8 ">
                    <Form className="row mt-3 " onSubmit={handleSubmit}>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Tên đăng nhập</Form.Label>
                            <Form.Control type="text" defaultValue={user.username} readOnly />
                            <small className="text-danger form-text">
                                {usernameError}
                            </small>
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Mật khẩu</Form.Label>
                            <Form.Control type="password" defaultValue={user.password} onChange={(e) => setPassword(e.target.value)} />
                            <small className="text-danger form-text">
                                {passwordError}
                            </small>
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Họ tên</Form.Label>
                            <Form.Control type="text" defaultValue={user.fullName} onChange={(e) => setName(e.target.value)} />
                            <small className="text-danger form-text">
                                {nameError}
                            </small>
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3 blog-checkbox">
                            <Form.Label>Giới tính: </Form.Label>
                            <div className="d-flex">
                                <Form.Check className="me-3" type="radio" defaultChecked={user.sex ? true : false} label="Nam" />
                                <Form.Check className="me-3" type="radio" defaultChecked={user.sex ? false : true} label="Nữ" />
                            </div>
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control type="number" defaultValue={user.phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                            <small className="text-danger form-text">
                                {phoneNumberError}
                            </small>
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" defaultValue={user.email} readOnly />
                            <small className="text-danger form-text">
                                {emailError}
                            </small>
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Ngày sinh</Form.Label>
                            <Form.Control type="date" defaultValue={user.birth} onChange={(e) => setDateOfBirth(e.target.value)} />
                            <small className="text-danger form-text">
                                {dateOfBirthError}
                            </small>
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control type="text" defaultValue={user.address} onChange={(e) => setAddress(e.target.value)} />
                            <small className="text-danger form-text">
                                {addressError}
                            </small>
                        </Form.Group>
                        <div className="mt-5 text-center">
                            <Button type="submit">Xác nhận</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </Container>
    )
}
export default EditUserInfo;