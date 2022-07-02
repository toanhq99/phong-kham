import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [repassword, setRepassword] = useState("");
    const [rePasswordError, setRepasswordError] = useState("");

    let navigate = useNavigate();

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

        if (!email) {
            formIsValid = false;
            setEmailError("Email không được để trống");
            return false;
        } else {
            setEmailError("");
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

        if (!repassword) {
            formIsValid = false;
            setPasswordError("Mật khẩu không được để trống");
            return false;
        } else {
            setPasswordError("");
            formIsValid = true;
        }

        if (repassword !== password) {
            formIsValid = false;
            setRepasswordError("Không trùng nhau");
            return false;
        }
        else {
            setRepasswordError("");
            formIsValid = true;
        }

        return formIsValid;
    };

    const registerSubmit = (e) => {
        e.preventDefault();
        handleValidation();
        console.log(username + " " + password);
        axios
            .post('http://localhost:8084/api/auth/register', {
                emal: email,
                userName: username,
                password: password,
                level: 3
            })
            .then((res) => {
                console.log(res);
                if (res.data.data == null) {
                    localStorage.removeItem("accessToken");
                    alert("Tên đăng nhập hoặc email đã tồn tại");
                    navigate("/register");
                } else {
                    localStorage.setItem("accessToken", JSON.stringify(res.data.data));
                    alert("Đăng kí thành công")
                    navigate("/");
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <Container>
            <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                    <div className="content-steps">Đăng ký</div>
                    <hr></hr>
                    <Form id="loginform" onSubmit={registerSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Tên đăng nhập</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nhập tên đăng nhập"
                                onChange={(event) => setUsername(event.target.value)}
                            />
                            <small id="emailHelp" className="text-danger form-text">
                                {usernameError}
                            </small>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Nhập email"
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <small id="emailHelp" className="text-danger form-text">
                                {emailError}
                            </small>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Mật khẩu</Form.Label>
                            <Form.Control
                                type="password"
                                id="exampleInputPassword"
                                placeholder="Nhập mật khẩu"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <small id="passworderror" className="text-danger form-text">
                                {passwordError}
                            </small>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Nhập lại mật khẩu</Form.Label>
                            <Form.Control
                                type="password"
                                id="exampleInputPassword1"
                                placeholder="Nhập lại mật khẩu"
                                onChange={(event) => setRepassword(event.target.value)}
                            />
                            <small id="repassworderror" className="text-danger form-text">
                                {passwordError}
                                {rePasswordError}
                            </small>
                        </Form.Group>
                        <div className="text-center">
                            <Button type="submit" className="btn btn-primary">
                                Xác nhận
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </Container>
    )
}

export default Register;