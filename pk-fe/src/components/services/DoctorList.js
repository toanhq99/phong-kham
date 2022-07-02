import { Container, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function DoctorList() {
    const [doctors, setDoctors] = useState([]);

    const doctorInfo = () => {
        axios
            .get(`http://localhost:8084/User/GetAllDoctor`)
            .then((res) => {
                console.log(res.data.data);
                setDoctors(res.data.data);
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        doctorInfo();
    }, []);

    return (
        <div className="w-100 h-100 pb-0">
            <div className="position-relative">
                <div height="228">
                    <Container className="h-100 d-flex flex-column py-5">
                        <div className=" justify-content-center row">
                            <div className="col-12">
                                <h1 className="text-center">Đặt khám trước qua Devfast</h1>
                                <p className="text-center">Để được tiếp đón ưu tiên viện hoặc được tư vấn với bác sĩ giỏi ngay tại nhà</p>
                                <div className="pt-3 ">
                                    <Form className="d-flex justify-content-center">
                                        <FormControl
                                            type="search"
                                            placeholder="Tìm bác sĩ..."
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
                <h2>Chọn bác sĩ</h2>
                <div className="row">
                    {doctors?.map((doctor) => (
                        <div key={doctor.id}>
                            <div className="col col-xs-12 col-sm-8 col-xl-6 w-25">
                                <div className="w-100 h-100 position-relative d-flex align-items-center">
                                    <div className="py-4 px-3">
                                        <div className="position-relative align-items-center d-flex justify-content-center logo">
                                            <img className="avatar" src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/test_b6fdadb7_445d_4a6a_ac5c_0ad3c31cdd67.png" alt="" />
                                        </div>
                                        <div className="info pt-3 pb-4 h-auto d-flex justify-content-between info">
                                            <h3 className="name">
                                                <Link to={"/chi-tiet-bac-si/"}>{doctor.fullName}</Link>
                                            </h3>
                                            <div className="specializations">{doctor.department.title}</div>
                                        </div>
                                        <div className="price-info d-flex justify-content-center align-items-center flex-column ">
                                            <div className="price-title">Giá khám</div>
                                            <div className="price-detail text-align-right d-flex align-items-center justify-content-flex-end">500000đ</div>
                                        </div>
                                        <div className="btn-footer">
                                            <Button className="w-100 d-flex align-items-center justify-content-center btn-footer-card" >
                                                <Link to={`detail/${doctor.id}`}>
                                                    <span>Đặt khám</span>
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
export default DoctorList;