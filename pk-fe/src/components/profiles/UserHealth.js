import { Container, Card, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useParams, useEffect } from "react";
import axios from "axios";

function UserHealth() {
    const baseURL = "https:localhost:3000/users"
    const { id } = useParams();
    const [user, setUser] = useState([]);

    const userHealth = () => {
        axios
        .get(`${baseURL}/${id}`)
        .then((res) => {
            setUser(res.data);
        })
        .catch((error) => console.log(error));
    }

    useEffect(() => {
        userHealth();
    }, []);

    return (
        <Container>
            <div className="flex-row">
                <Link to={"/"}>Trang chủ</Link> / Hồ sơ sức khỏe / Quang
            </div>
            <div className="text-center">
                <h2>HỒ SƠ SỨC KHỎE</h2>
            </div>
            <Container className="w-75 mt-4">
                <Dropdown>
                    <Card >
                        <Card.Header as="h5"  >
                            <div className="flex-row d-flex">
                                <div className="w-75">
                                    {user.appointmentDay}, {user.specialty}
                                </div>
                                <div className="w-25 justify-content-end">
                                    <Dropdown.Toggle />
                                </div>
                            </div>
                        </Card.Header>
                        <Dropdown.Menu className="w-100">
                            <Card.Body>
                                <Card.Title>{user.specialty}</Card.Title>
                                <Card.Text>
                                    {user.symptom}
                                </Card.Text>
                                <Card.Text>
                                    {user.treatments}
                                </Card.Text>
                                <Card.Text>
                                    {user.medicalCheckUpDate}
                                </Card.Text>
                            </Card.Body>
                        </Dropdown.Menu>
                    </Card>
                </Dropdown>
            </Container>
        </Container>
    )
}

export default UserHealth;