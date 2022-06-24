import { Button, Card, Container, Form } from "react-bootstrap";

function ServiceDetail() {
    return (
        <Container className="my-4 w-100 h-100 ">
            <div className="justify-content-center d-flex position-relative">
                <Card className="flex-row d-flex w-75">
                    <Card.Img variant="left" style={{ maxWidth: '33%' }} src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/slider-2_738e0bcf_d665_457e_87c9_26c007c017f7.jpg" />
                    <Card.Body>
                        <Card.Title>Cắt phanh môi bám thấp</Card.Title>
                        <Card.Text>300000đ</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}
export default ServiceDetail;