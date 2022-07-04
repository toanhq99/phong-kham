import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function ListUser() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8084/User/GetAllUserByRole/User")
            .then((res) => {
                setUsers(res.data.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Họ tên</th>
                    <th>Giới tính</th>
                    <th>Ngày sinh</th>
                    <th>Địa chỉ</th>
                    <th>Số điện thoại</th>
                    <th>Email</th>
                    <th>Tên đăng nhập</th>
                </tr>
            </thead>
            <tbody>
                {users?.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.fullName}</td>
                        <td>{user.sex ? "Nam" : "Nữ"}</td>
                        <td>{user.birth}</td>
                        <td>{user.address}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default ListUser;