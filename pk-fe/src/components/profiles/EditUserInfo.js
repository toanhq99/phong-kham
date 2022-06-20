import { Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function EditUserInfo() {
    return (
        <Container>
            <div className="flex-row">
                <Link to={"/"}>Trang chủ</Link> / Thông tin cá nhân / Sửa thông tin cá nhân
            </div>
            <div className="text-center">
                <h2>SỬA THÔNG TIN CÁ NHÂN</h2>
            </div>
            <div className="align-items-center d-flex justify-content-center">
                <div className="col-md-8 ">
                    <div className="row mt-3 ">
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Tên đăng nhập</Form.Label>
                            <Form.Control type="text" value="username" disabled />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Họ tên</Form.Label>
                            <Form.Control type="text" value="name" />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control type="number" value="000000000" />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value="email" />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Ngày sinh</Form.Label>
                            <Form.Control type="date" value="name" />
                        </Form.Group>
                        <Form.Group className="col-md-12 mb-3">
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control type="text" value="name" />
                        </Form.Group>
                        <div className="mt-5 text-center">
                            <Button type="submit">Xác nhận</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default EditUserInfo;