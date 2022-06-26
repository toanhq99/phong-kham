import axios from "axios";
import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";

function ListDoctor() {
    const [doctors, setDoctors] = useState([]);

    const listDoctor = () => {
        axios
            .get("/get/all")
            .then((res) => {
                setDoctors(res.data)
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        listDoctor()
    }, []);

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Họ tên</th>
                        <th>Tên đăng nhập</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>Ngày sinh</th>
                        <th>Địa chỉ</th>
                        <th>Chuyên khoa</th>
                        <th>Kinh nghiệm</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors?.map((doctor) => (
                        <tr key={doctor.id}>
                            <td>{doctor.name}</td>
                            <td>{doctor.username}</td>
                            <td>{doctor.phoneNumber}</td>
                            <td>{doctor.email}</td>
                            <td>{doctor.dateOfBirth}</td>
                            <td>{doctor.address}</td>
                            <td>{doctor.specialty}</td>
                            <td>{doctor.exp}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default ListDoctor;