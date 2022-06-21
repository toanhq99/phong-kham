import { Container, Card, Button, Form } from "react-bootstrap"

function AddNewRecord() {
    return (
        <Container>
            <div className="mt-5 text-center">
                <h2>Thêm mới hồ sơ</h2>
            </div>
            <Container className="mt-5 w-75">
                <Card>
                    <Card.Header as="h5">Khách hàng: Hà Quang Toàn</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Ngày khám: 11/11/2022
                        </Card.Text>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Triệu chứng</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Phương pháp điều trị</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Ngày tái khám</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Xác nhận
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
    )
}

export default AddNewRecord;