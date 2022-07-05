import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UserHealth() {

    const [user, setUser] = useState(null);
    const userInfo = JSON.parse(localStorage.getItem("accessToken"));
    const { id } = useParams();
    const isDoctor = () => {
        if (userInfo.role === "Doctor" && user==null) {
            return (
                <div className="w-75 text-end mt-4">
                    <Link to={"/doctor/add-new-record/" + id}>
                        <Button>
                            Thêm mới hồ sơ
                        </Button>
                    </Link>
                </div>
            )
        }

    }
    console.log(userInfo);
    // const getUser = () => {
    //     const users = JSON.parse(localStorage.getItem("accessToken"));
    //     if (users) {
    //         setUser(users);
    //         console.log(user);
    //     }
    // }

    const logHeath = () => {
        if (user!=null) {
            return(
            <Container className="mt-4 w-75 h-25">
                <Card className="mt-3">
                    <Card.Header as="h5">{user == null ? "Null" : user.time}</Card.Header>
                    <Card.Body>
                        <Card.Title>Khách hàng: {user == null ? "Null" : user.user.fullName}</Card.Title>
                        <Card.Text>
                            Triệu chứng: {user == null ? "Null" : user.title}
                        </Card.Text>
                        <Card.Text>
                            Cách điều trị: {user == null ? "Null" : user.detail}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            )
        }
        return <>Không có hồ sơ</>

    }
    useEffect(() => {
        if (user != null && user.role == "Doctor") {
            axios
                .get('http://localhost:8084/Heath/getAllHeathByIdUser/' + id)
                .then((res) => {
                    setUser(res.data.data[0]);
                    console.log(res.data.data[0]);
                })
                .catch((error) => console.log(error));
        }
        else {
            axios
                .get('http://localhost:8084/Heath/getAllHeathByIdUser/' + userInfo.id)
                .then((res) => {
                    setUser(res.data.data[0]);
                    console.log(res.data.data[0]);
                })
                .catch((error) => console.log(error));
        }
    }, [userInfo]);

    return (
        <Container>
            <div className="flex-row">
                <Link to={"/"}>Trang chủ</Link> / Hồ sơ sức khỏe / {userInfo == null ? "Null" : userInfo.username}
            </div>
            <div className="text-center">
                <h2>HỒ SƠ SỨC KHỎE</h2>
            </div>
            {isDoctor()}
            {logHeath()}
            {/* <Container className="mt-4 w-75 h-25">
                <Card className="mt-3">
                    <Card.Header as="h5">{user == null ? "Null" : user.time}</Card.Header>
                    <Card.Body>
                        <Card.Title>Khách hàng: {user == null ? "Null" : user.user.fullName}</Card.Title>
                        <Card.Text>
                            Triệu chứng: {user == null ? "Null" : user.title}
                        </Card.Text>
                        <Card.Text>
                            Cách điều trị: {user == null ? "Null" : user.detail}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container> */}
        </Container>
    )
}

export default UserHealth;