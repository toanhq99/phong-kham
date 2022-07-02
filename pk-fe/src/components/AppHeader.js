import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

function AppHeader() {
    const [user, setUser] = useState([]);

    let navigate = useNavigate();

    let logout = () => {
        localStorage.removeItem("accessToken");
        navigate("/")
    }

    const haveName = () => {
        if (!user.fullName) {
            return user.username;
        } else {
            return user.fullName;
        }
    }

    const isLogin = () => {
        if (!localStorage.getItem("accessToken")) {
            return (
                <Nav>
                    <Nav.Link href="/login">Đăng nhập</Nav.Link>
                    <Nav.Link href="/register">Đăng kí</Nav.Link>
                </Nav>
            )
        }
        else {
            if (user.level === 3) {
                return (
                    <NavDropdown title={"Xin chào, " + haveName()} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/user/info">Thông tin cá nhân</NavDropdown.Item>
                        <NavDropdown.Item href="/user/calendar">Lịch sử đặt khám</NavDropdown.Item>
                        <NavDropdown.Item href="/user/health">Hồ sơ sức khỏe</NavDropdown.Item>
                        <NavDropdown.Item onClick={logout}>Đăng xuất</NavDropdown.Item>
                    </NavDropdown>
                )
            } else {
                return (
                    <NavDropdown title={"Xin chào, " + haveName()} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/doctor/info">Thông tin cá nhân</NavDropdown.Item>
                        <NavDropdown.Item href="/doctor/calendar">Lịch khám trong ngày</NavDropdown.Item>
                        <NavDropdown.Item onClick={logout}>Đăng xuất</NavDropdown.Item>
                    </NavDropdown>
                )
            }
        }
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("accessToken"));
        if (user) {
            setUser(user);
        }
    }, []);

    return (
        <Navbar collapseOnSelect expand="lg" bg="light">
            <Container>
                <Navbar.Brand href="/">
                    <Image src="https://devfast.us/images/devfast-logo.png" className="logo-img"></Image>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="/">Trang chủ</Nav.Link>
                        <Nav.Link eventKey={2} href="/doctor">
                            Bác sĩ
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="/service">
                            Dịch vụ
                        </Nav.Link>
                        {isLogin()}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default AppHeader;