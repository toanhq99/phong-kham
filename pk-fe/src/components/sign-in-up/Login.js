import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router";

function Login() {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [usernameError, setUsernameError] = useState("");

    let navigate = useNavigate();

    const handleValidation = (event) => {
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
            setPasswordError("Mật khẩu được để trống");
            return false;
        } else {
            setPasswordError("");
            formIsValid = true;
        }

        return formIsValid;
    };

    const loginSubmit = (e) => {
        e.preventDefault();
        handleValidation();
        console.log(username + " " + password);
        axios
            .post('http://localhost:8084/api/auth/login', {
                userName: username,
                password: password
            })
            .then((res) => {
                console.log(res);
                if (res.data.data == null) {
                    navigate("/login");
                    localStorage.removeItem("accessToken");
                    alert("Tên đăng nhập hoặc mật khẩu không đúng");

                } else {
                    navigate("/");
                    localStorage.setItem("accessToken", JSON.stringify(res.data.data));
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <Container>
            <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                    <div className="content-steps">Đăng nhập</div>
                    <hr></hr>
                    <Form id="loginform" onSubmit={loginSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Tên đăng nhập</Form.Label>
                            <Form.Control
                                type="text"
                                className="form-control"
                                id="usernameInput"
                                name="usernameInput"
                                placeholder="Nhập tên đăng nhập"
                                onChange={(event) => setUsername(event.target.value)}
                            />
                            <small id="emailHelp" className="text-danger form-text">
                                {usernameError}
                            </small>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <small id="passworderror" className="text-danger form-text">
                                {passwordError}
                            </small>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                id="exampleCheck1"
                                label="Check me out"
                            />
                        </Form.Group>
                        <div className="text-center">
                            <Button type="submit" className="btn btn-primary">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </Container>
    )
}

export default Login;