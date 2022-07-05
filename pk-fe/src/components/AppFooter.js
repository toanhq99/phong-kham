import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import {
    AiOutlineMail,
    AiFillFacebook,
    AiFillTwitterSquare
} from "react-icons/ai";

function AppFooter() {
    return (
        <Navbar className="d-block" expand="lg" bg="light">
            <Container fluid className="text-center justify-content-center mt-4">
                <Row className="w-100">
                    <Col md={6} className="">
                        <h5 className="title">Liên hệ với DevFast</h5>
                        <p>
                            Địa chỉ: Tầng 16 - Tòa nhà Việt A, Phố Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành Phố Hà Nội.
                        </p>
                    </Col>
                    <Col md={6} >
                        <h5 className="title">Liên kết</h5>
                        <ul className="">
                            <Col md={{ span: 6, offset: 5 }} className="text-start">
                                <li className="list-unstyled">
                                    <AiOutlineMail /><a href="#!" className="text-decoration-none">{" "}Gmail</a>
                                </li>
                                <li className="list-unstyled">
                                    <AiFillFacebook /><a href="#!" className="text-decoration-none">{" "}Facebook</a>
                                </li>
                                <li className="list-unstyled">
                                    <AiFillTwitterSquare /><a href="#!" className="text-decoration-none">{" "}Twitter</a>
                                </li>
                            </Col>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copyright text-center py-3">
                <Container fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://devfast.us" className="text-decoration-none"> Devfast.us </a>
                </Container>
            </div>
        </Navbar>
    )
}

export default AppFooter;