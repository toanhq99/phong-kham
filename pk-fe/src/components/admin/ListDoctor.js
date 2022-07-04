import axios from "axios";
import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";

function ListDoctor() {
    const [doctors, setDoctors] = useState([]);

    const listDoctor = () => {
        axios
            .get("http://localhost:8084/User/GetAllDoctor")
            .then((res) => {
                setDoctors(res.data.data);
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
                        <th>Giới tính</th>
                        <th>Ngày sinh</th>
                        <th>Địa chỉ</th>
                        <th>Tên đăng nhập</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>Chuyên khoa</th>
                        <th>Kinh nghiệm</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors?.map((doctor) => (
                        <tr key={doctor.id}>
                            <td>{doctor.id}</td>
                            <td>{doctor.fullName}</td>
                            <td>{doctor.sex ? "Nam" : "Nữ"}</td>
                            <td>{doctor.birth}</td>
                            <td>{doctor.address}</td>
                            <td>{doctor.username}</td>
                            <td>{doctor.phoneNumber}</td>
                            <td>{doctor.email}</td>
                            <td>{doctor.department==null?" ":doctor.department.title}</td>
                            <td>{doctor.department==null?" ":doctor.department.detail}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default ListDoctor;