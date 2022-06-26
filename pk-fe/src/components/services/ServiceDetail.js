import { Button, Card, Container, Form } from "react-bootstrap";

function ServiceDetail() {
    return (
        <Container className="w-75 h-100 justify-content-center d-flex position-relative flex-column mt-2">
            <h2 className="text-center">Chi tiết dịch vụ</h2>
            <Card className="flex-row my-2">
                <Card.Img variant="left" style={{ maxWidth: '33%' }} src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/slider-2_738e0bcf_d665_457e_87c9_26c007c017f7.jpg" />
                <Card.Body>
                    <Card.Title>Cắt phanh môi bám thấp</Card.Title>
                    <Card.Text>300000đ</Card.Text>
                </Card.Body>
            </Card>

            <Card className="my-2">
                <Card.Body>
                    <Card.Title className="flex-row d-flex align-items-center">
                        Lịch khám tại viện
                        <Form.Control className='mx-3 w-25' type='date' />
                    </Card.Title>
                    <Card.Text>
                        <Form.Group className="flex-row d-flex mx-4">
                            <Form.Check className="me-3" type="radio" name="isPublic" label="11:00" />
                            <Form.Check className="me-3" type="radio" name="isPublic" label="12:00" />
                        </Form.Group>
                    </Card.Text>
                    <Button variant="primary">Đặt lịch</Button>
                </Card.Body>
            </Card>

            <Card className=" my-2">
                <Card.Body>
                    <Card.Title>Chi tiết dịch vụ</Card.Title>
                    <Card.Text>
                        <p>
                            Cắt phanh mô là thủ thuật đơn giản để loại bỏ hoặc giảm căng các phanh ở trong miệng.

                            Phanh môi bám thấp thường gây ra lệch răng, tạo khe hở giữa 2 răng cửa lớn ảnh hưởng đến thẩm mỹ và mất tự tin trong giao tiếp; gây co kéo lợi, mảng bám tích tụ nhiều hơn và gây khó khăn trong việc vệ sinh răng miệng.

                            Việc cắt phanh môi bám thấp giúp môi cử động dễ dàng và không ảnh hưởng đến cơ môi. Thực hiện thủ thuật này tại Phòng khám Răng Hàm Mặt ENAX khách hàng được thăm khám và tư vấn miễn phí, chi phí phù hợp và quy trình đảm bảo an toàn và thẩm mỹ cho khách hàng.
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default ServiceDetail;