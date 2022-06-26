import { Container, Card, Button, Form } from "react-bootstrap"
import { useState, useEffect, useParams } from "react";
import axios from "axios";

function AddNewRecord() {
    const baseURL = "https:localhost:3000/users"
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [symptom, setSymptom] = useState("");
    const [treatments, setTreatments] = useState("");
    const [medicalCheckUpDate, setMedicalCheckUpDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post(`/add-doctor`, {
                symptom: symptom,
                treatments: treatments,
                medicalCheckUpDate: medicalCheckUpDate
            })
            .then((res) => console.log(res))
            .catch((error) => console.log(error)
            );
    };

    useEffect(() => {
        axios
        .get(`${baseURL}/${id}`)
        .then((res) => {
            setUser(res.data)
        })
        .catch((error) => console.log(error));
    }, [id]);

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
                                <Form.Label>Phương pháp điều trị</Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={(e) => setTreatments(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Ngày tái khám</Form.Label>
                                <Form.Control type="date" onChange={(e) => setMedicalCheckUpDate(e.target.value)}/>
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