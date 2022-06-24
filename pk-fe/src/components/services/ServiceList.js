import { Container, Form, FormControl, Button, Card } from "react-bootstrap";

function ServiceList() {
    return (
        <div className="w-100 h-100 pb-0">
            <div className="position-relative">
                <div height="228">
                    <Container className="h-100 d-flex flex-column py-5">
                        <div className=" justify-content-center row">
                            <div className="col-12">
                                <div className="pt-3 ">
                                    <Form className="d-flex justify-content-center">
                                        <FormControl
                                            type="search"
                                            placeholder="Tìm dịch vụ..."
                                            className="w-50"
                                            aria-label="Search"
                                        />
                                    </Form>
                                </div>
                            </div>
                        </div>

                    </Container>
                </div>
            </div>
            <Container>
                <h2>Chọn dịch vụ</h2>
                <Container className="d-flex gap-3 flex-wrap justify-content-center my-4">
                    <Card className="flex-row" style={{ width: '45%', height: '15%' }}>
                        <Card.Img variant="top" style={{ maxWidth: '33%' }} src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/slider-2_738e0bcf_d665_457e_87c9_26c007c017f7.jpg" />
                        <Card.Body>
                            <Card.Title>Cắt phanh môi bám thấp</Card.Title>
                            <Card.Text>300000đ</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className="flex-row" style={{ width: '45%', height: '15%' }}>
                        <Card.Img variant="top" style={{ maxWidth: '33%' }} src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/slider-2_738e0bcf_d665_457e_87c9_26c007c017f7.jpg" />
                        <Card.Body>
                            <Card.Title>Cắt phanh môi bám thấp</Card.Title>
                            <Card.Text>300000đ</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className="flex-row" style={{ width: '45%', height: '15%' }}>
                        <Card.Img variant="top" style={{ maxWidth: '33%' }} src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/slider-2_738e0bcf_d665_457e_87c9_26c007c017f7.jpg" />
                        <Card.Body>
                            <Card.Title>Cắt phanh môi bám thấp</Card.Title>
                            <Card.Text>300000đ</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className="flex-row" style={{ width: '45%', height: '15%' }}>
                        <Card.Img variant="top" style={{ maxWidth: '33%' }} src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/slider-2_738e0bcf_d665_457e_87c9_26c007c017f7.jpg" />
                        <Card.Body>
                            <Card.Title>Cắt phanh môi bám thấp</Card.Title>
                            <Card.Text>300000đ</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className="flex-row" style={{ width: '45%', height: '15%' }}>
                        <Card.Img variant="top" style={{ maxWidth: '33%' }} src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/slider-2_738e0bcf_d665_457e_87c9_26c007c017f7.jpg" />
                        <Card.Body>
                            <Card.Title>Cắt phanh môi bám thấp</Card.Title>
                            <Card.Text>300000đ</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className="flex-row" style={{ width: '45%', height: '15%' }}>
                        <Card.Img variant="top" style={{ maxWidth: '33%' }} src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/slider-2_738e0bcf_d665_457e_87c9_26c007c017f7.jpg" />
                        <Card.Body>
                            <Card.Title>Cắt phanh môi bám thấp</Card.Title>
                            <Card.Text>300000đ</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Container>
            </Container>
        </div>
    )
}
export default ServiceList;