import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function ListUser() {
    const [users, setUsers] = useState([]);

    const listUser = () => {
        axios
            .get("/get/all")
            .then((res) => {
                setUsers(res.data)
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        listUser()
    }, []);
    
    return (
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
                </tr>
            </thead>
            <tbody>
                    {users?.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.email}</td>
                            <td>{user.dateOfBirth}</td>
                            <td>{user.address}</td>
                        </tr>
                    ))}
                </tbody>
        </Table>
    )
}

export default ListUser;