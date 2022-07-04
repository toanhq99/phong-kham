import { Container, Card, Button, Form } from "react-bootstrap"
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

function AddNewRecord() {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [symptom, setSymptom] = useState("");
    const [treatments, setTreatments] = useState("");
    const doctor = JSON.parse(localStorage.getItem("accessToken")) ;
    console.log(doctor.id);
    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post(`http://localhost:8084/Heath/${localStorage.getItem("timeId")}/${id}/${user.department.id}`, {
                title: symptom,
                detail: treatments
            })
            .then((res) => console.log(res))
            .catch((error) => console.log(error)
            );
    };

    useEffect(() => {
        axios
            .get('http://localhost:8084/User/getDoctorById/' + doctor.id)
            .then((res) => {
                setUser(res.data.data);
                console.log(res.data.data);
            })
            .catch((error) => console.log(error));
        
        
    }, [doctor.id]);

    return (
        <Container>
            <div className="mt-5 text-center">
                <h2>Thêm mới hồ sơ</h2>
            </div>
            <Container className="mt-5 w-75">
                <Card>
                    <Card.Header as="h5">Khách hàng: {user.name}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Ngày khám: 11/11/2022
                        </Card.Text>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Triệu chứng</Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={(e) => setSymptom(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Chi tiết và phương pháp điều trị: </Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={(e) => setTreatments(e.target.value)} />
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