import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom";

function AppHome() {
    return (
        <div className="w-100 h-100">
            <div className="position-relative">
                <div className="section-1">
                    <Container className="h-100 justify-content-center flex-column wrap-text d-flex">
                        <h1 className="section-h1">Người tiêu dùng thông thái Hãy khám bệnh thông minh</h1>
                        <h3 className="section-h3">Bạn là người tiêu dùng thông thái, bạn yêu gia đình hơn chính bản thân mình. Hãy cùng Devfast chăm sóc sức khỏe cho bản thân và gia đình để mỗi ngày bên nhau là một ngày ý nghĩa.</h3>
                    </Container>
                </div>
                <div className="section-2 mt-5">
                    <Container>
                        <div className="h-100 justify-content-center flex-column d-flex align-items-center">
                            <h2 className="mb-5">Trải nghiệm khám bệnh hiện đại cùng Devfast</h2>
                        </div>
                        <div className="d-flex ant-row ">
                            <div className="d-flex justify-content-center flex-column align-items-center px-4 ant-col">
                                <img src="data:image/png;base64,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" alt="section2-1" />
                                <h3>Đặt khám từ xa</h3>
                                <div className="">Bác sĩ của Devfast luôn sẵn sàng tư vấn và chăm sóc sức khỏe cho bạn mọi lúc mọi nơi qua video & chat</div>
                            </div>
                            <div className="d-flex justify-content-center flex-column align-items-center px-4 ant-col">
                                <img src="data:image/png;base64,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" alt="section2-1" />
                                <h3>Đội ngũ chuyên gia và cơ sở y tế hàng đầu</h3>
                                <div className="">Dễ dàng kết nối với các bác sĩ ưu tú, tận tâm, có chuyên môn cao đến từ các BV tuyến trung ương & phòng khám uy tín</div>
                            </div>
                            <div className="d-flex justify-content-center flex-column align-items-center px-4 ant-col">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAyWSURBVHgB7Z1bbBTXGcf/Y7P2GpvgTSQIVQprQEEgKDaNopRLvJCHVqAALfSWPMSUUolSCaP2iYdinto+2VRKQGojjFRSVSqN0yqozQNexKVUtMGUCNQqrRdIQ0AqCwoXg40n33d217G9M7Nn7jPL+UnLLjuzF89/v+uZOUdDTMnr+hwMIUMP0+Kmj903Q6PbeHTcoudy9Kh0n0MNBjCKgVSDdhlVjIaYIAS9j430MEOCZcpEdE6O3i9LgmfpcbbaBI+0wIN5vbm5DjvpW2YAcQuCLH1eLwl9CFVAJAXO39fbyaq6EJyoRpQsuyvOVh0pgSMibDk6euMqdCQEvpbX08l6HETUhJ2Mz0JnunWRV2R3abfgEaELnL+r76G7Tg+TJr/J0Xft8jJGrzqgb9B1OgbFH7hOn1Gjo6/2Afa6FTs0gfN39KVkDb30sBVxxCNrXrlf/MC7jD8CucQQ2tyIXIMQyN/Td4o6NK7iMho6OAmjvOE1OOTFN8Rru8w/AunhJLrhgkAF5rKHXPLb9LAH1QE3VnqLYcY2o/wjmUgXNV86NYhmjIAed5RisxMCE5gTqeZ6nKNvvBHVBsVk8krnyJrn2Hqd/rkHI3fce3K7tvfkDm0faicKPzLFuacLRGCOt5Ql96PQVqxWWosu257IRWo0jMXZR8O4DY+YAp8RyZQm2oBxyZLdkC6KnJFKvjSRh2T4oT6KjhVv6AM1NSS0jh593G6jDRiEQ3y14DFx41MCeUGaBzHyD+lvr4BWOy7BomOkUYuUyqU+fZynY9d9+vvOM3XfBOaY+xiKW4D/5mGy5Aoin/iBdhwWWTSXSXrCfLsMvghc7Ez1P5biliiJXCEmc2JFTY2O8ZmzGN4k4RNJtLmx3sLX8BgxAsTZcnUnVHbgzpdUTM4c1JuHhtB8ZruWg0d4LrCoc6uxFHJHDg/Qlkp512OWxVMXTe5ojxLXkDTq8TZCwDMLLvaWB6AwZxQ9qSZtFwLEEwvmuEvv1AeFNTXodNO7dvaRHkBJFfdi01BUhqzYabfLCa5dtKj1RpRrtslAaqrWhgBwb8EjyjU7oJVyFlfDgLK4ErgYT9JQ2KcQj9vhM45d9Fi3SgnsBt/rY8cWnExCWa970kjA0ckCsjiy4KL1Oh7CUkyCBvRTddp5+IAjCyZxd0LhHSP+ncJkW2AxDAjVjvSYjF8NENsCU+zlzC8NhbdwAyTv/OQ6M+y7aN3dALTCBB4/rvM+9NlKsvLDVLcNi/OrFH7AA/0P0eJl2WTvpLuH6Aj7Ypcrd/J468NzOHr1knh8++EQljw5C4tTs/DK/DasfLrF8vW8/1sfvi9ef+HmNfH/6XVJ8R7fnbdMvEdosBUXyibPRpyk5YpCabT/4mnsPnvUcp+1X1yInz2/DrObysPZyU8GsePUEfphmBvI7KYUfrP6FSF4aGhIe3WBm7TAIsvTxbVEofDDk0fw2/+ck9qXRfrTV7dOEJmtnsWV5fUVm8KzZjrOqUZtCzzATpLVgZD4+cAxaXEZdt2vHjss3G/p/3bEZXaffdfS0n1FQ4dXQ4pSAovaVw/n2l0W5xfnj8EuH+SviR8Gv/7lv7wJu/CPg71GaIx6U61IJVmi9tURCvsv/tXw+ScSSWyeu0zc/37wfXx0t9zaDlw6LeKumSVublmGZxqb6bV5eo9yD3HqeuG1RvE8ADZSXbzLbUYtl0Xr4XWu2BIn80xjCr9bs1WIw+xavAbbThzGe/+7JPV65qfL1mLrs8snvGfPB+We4t0rF7F90XIEzud18V64QC4Gh+SeGS5lJvPCjJYxcUt8b4G8CIuaZ00Ql+EfCXuDyYQWhwt0uu1uVRRYNDcidoXCZHGZJ+qScIvRe5QStVDwoLtV2YKHw70Kf7rBQT9zo7wcf++jS5Dl4q1rZTH7KsVhozg+t+lphIrmrnqRcdEZ+Mzdh8CNO8a39pmLyvZngbedPCzuWZRuip1G8dOKbx97U8Rsfj3ff+eYcaY9t2mW6XcLiLSbU3sqNjryd/W8Xy76vzeBX5+lOPuJ+T63qXl2AfbLHC9IIoXn8GPT7TOagJfmARvoN9hYBz/JpqZqq+EAS4Fv3NFbEzWQ7zDY4MwVoOdUwXor8W8cwQ1/voYpU0jeNvwI9RK/bRb6ly/7LPIDpJyUTJYuOpGALydoXyf39quzcuIyc7EOjQi2N8yfWS/puNhdd5+EvzhMtqxj8Kg/CRZbr50Yxta0BFsxA/Z7w0aljx+f9bervsflTjigUpKVgQ/wwbALH/hnscnWweeRpRPrdxhm4kbvPxtrKOb+BNPRAidY5RKuoTzISbJl3cnSg6t/F8+ktuTXZfZsKd42YeD/17Dxz4dx+dPy0JSelsLrL66j+2b0rFiLLf1/MHy3DS0L0fXcGrQ+ZS8ErDpQ/tx1vzPrwtk0tpKtShYcWA08swm26Ru8ZCguc3D1N4S4TMeCZdi5xLjTdfzjQTTXNSAmZOx2tkwF5gwaEYatd+/fjWvfPWSRmS9MdLNspXOmlR+bWw+GhBfg+1hQD1tnX5oKnKinUBRRcp/mhShGtJOwLOZkmuuTyK7fKu4nc55+LF3/sD8kGRK2Bn7MXfRwdCcK7SLLNYu7vas3mb6Ot+/58hrDbfv+eVq4/Bhgy02bCxzRKZBY3EP/Mm56sGtOT7P+2p1fWo7XFhhn4VuyR8g7hDp6JIcNN22VZKURMdg1W8XdjgVy5VPP8nWm8bijP8SzOOSRdtPmAuvRsmA++Jk/Gvek2fUaxV0zOA73fe1Vw22cVXeePoqII+2mY+OiWRQud4ye76fkyS5c93YvX1v2PP9YNqYXIvIksUFmt9hYMMNWymKOd6/dy9dVjLtmcDxuH1dO8eNzm3eUlVgRJSOzk1UMjmSSxQefyx1OlLh5IRt3zeilhshStmbqdpmVUZFkVC4Om7cqC2sARpJSOeRFc4Lfa+CbOxA7uDdNzahUkzZgtVvsyqTxxMba/KIG7ZV3UcSZTKUdlMBxRlcCVzcURu/r1tcwRUbgAM9SrCqG7lmPGfi+6oosF64bD6IrKlBYW/kds81WjY4YdN0VqDBmYFUmKYHjgaWLVklW/ElbbbQSWFlwTLDKpJWLrgKG7iJlts3KgnNQxINamK6wZjXYEKgFN9UD859CbBj4GLHAXGBNrIIZGKvSwG5H18+FQ8Rq9rTZBlMX/egRPJmIy4jrqmsVGKYC16oJv+ODxdk35knWiH8WrPAYzYHAqQYtp9qV8cd6sKFQC3t+ZofRlfAncsC3DiPW+DyNgxU5sw2VBM6SFXfAY+ZSWT54c+Jzdx4UbnFm7pOIHNa9aN2fJetemo+qY0YjsCSsGZcsQqm1wLX+dLP4QKyZh6pi2/MID91cp0pzdPiylg+zayWwPgYXEFSiMQF0rgBemI3wGMVts02hzpPFcNOjNCmL7Kw7UYATqhaKuV+ZHWpyVcBiiqXKAt/TeWlyWxcdKwKE4m+qUXM0mlQiC0V00eDwyoYSCbX4c6TRrA2wosCphHZcdbQizAiOW22WOyerRllxJOH4O03LWu0iO+N7HxTRo6ayLnICa+YnVitCZASHKu1iZ2Gs/jDXblCUkUtN1SpORWDnvOgsFNFBk1tXyY7AFd2BIjByyaScwUkLLE4A0JQVRwIdvQ2a3OKV9i5dUdl0FMhRa1J6sSx7Aj8gN62aHuEiGXtL2BJYjFho4S0xq0APhUpbuZDtiZLUMu+hIVUWTcb25aOiN62SraDJJRuc9SCcXR88xZu1bRUSUM7D4spmzZNxJLCy4oAgcRMJ5+Iyzq/wV1bsN7nkVLQ21WmuzotzLLCyYh/h49qANjeWW8LdHB3Kir2l0GPopFJodUrTPOk3uBJYWDHVZlC4h6yWXTKVQvvgIa4nDBZTy9eLpUHTUNinEOb2ktVm4QOezAitmh82YVdcOBvjkF/ClvBsyu/8Pb0bDlfIfAzI0Y3Pa8vSET/vt6jj8XROdxKZXXUrHg9y4l8NheuoteJtlP7Pl5IUruvKiWHWEPFW4Pt6mv7YfsQ3HueEYCjedCHYmFi8Q9iC2cXzVRmEyKOUdEV1SYCCteUoBmaFtem4zKcFx004WXxZdiP/UF8qkq5oiJwTCc0IzpMlZqtVSDN8W1clNHddylAf4Tga0edVwyCu+LpwTmAis6i16KX7d4LMUONAICsjkdB7isuTe4vPTYJqILClrzyz5oIL7kES+x539ytD4GubkdC89m2H7askCjP+9NEoyyElrDyhLV4nLBpoJ9F49gC27vRY1l0qZfjiZp7pRxOxNQeFbT4Dimtc498jRL4AAAAASUVORK5CYII=" alt="section2-1" />
                                <h3>Tiếp đón ưu tiên với nhiều quyền lợi đặc biệt</h3>
                                <div className="">Dễ dàng kết nối với các bác sĩ ưu tú, tận tâm, có chuyên môn cao đến từ các BV tuyến trung ương & phòng khám uy tín</div>
                            </div>
                            <div className="d-flex justify-content-center flex-column align-items-center px-4 ant-col">
                                <img src="data:image/png;base64,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" alt="section2-1" />
                                <h3>Đặt khám từ xa</h3>
                                <div className="">Bác sĩ của Devfast luôn sẵn sàng tư vấn và chăm sóc sức khỏe cho bạn mọi lúc mọi nơi qua video & chat</div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="w-100 h-100 mb-6 pd-3 position-relative">
                    <div className="w-100 container-hot-service">
                        <div className="d-flex justify-content-between align-items-center header">
                            <h2>Dịch vụ nổi bật</h2>
                            <Link to={"/dich-vu"}>
                                Xem tất cả
                                <span className="ml-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                        <div className="body">
                            <div className="d-flex align-items-center overflow-hidden position-relative">
                                <ul className="m-0 p-0 d-flex position-relative multi-track">
                                    <li className="multi-item position-relative">
                                        <div className="hot-service-item">
                                            <div className="hot-service-item-box w-100 h-100 justify-content-between d-flex">
                                                <div className="top">
                                                    <div className="image">
                                                        <div className="d-block overflow-hidden position-absolute m-0 image-box">
                                                            <img className="image-box-content" src="https://isofhcare.com/_next/image?url=https%3A%2F%2Fisofhcare-backup.s3-ap-southeast-1.amazonaws.com%2Fimages%2F15-png_f8b7b56a_b2eb_47af_aa27_36243ad5deaf.png&w=1920&q=75" alt="" />
                                                        </div>
                                                    </div>
                                                    <Link to={"/chi-tiet-dich-vu"}>
                                                        <h3>Khám Tai Mũi Họng với PGS Hoài An</h3>
                                                    </Link>
                                                </div>
                                                <div className="price">
                                                    1.562.000 đ
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="multi-item position-relative">
                                        <div className="hot-service-item">
                                            <div className="hot-service-item-box w-100 h-100 justify-content-between d-flex">
                                                <div className="top">
                                                    <div className="image">
                                                        <div className="d-block overflow-hidden position-absolute m-0 image-box">
                                                            <img className="image-box-content" src="https://isofhcare.com/_next/image?url=https%3A%2F%2Fisofhcare-backup.s3-ap-southeast-1.amazonaws.com%2Fimages%2F15-png_f8b7b56a_b2eb_47af_aa27_36243ad5deaf.png&w=1920&q=75" alt="" />
                                                        </div>
                                                    </div>
                                                    <Link to={"/chi-tiet-dich-vu"}>
                                                        <h3>Khám Tai Mũi Họng với PGS Hoài An</h3>
                                                    </Link>
                                                </div>
                                                <div className="price">
                                                    1.562.000 đ
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="multi-item position-relative">
                                        <div className="hot-service-item">
                                            <div className="hot-service-item-box w-100 h-100 justify-content-between d-flex">
                                                <div className="top">
                                                    <div className="image">
                                                        <div className="d-block overflow-hidden position-absolute m-0 image-box">
                                                            <img className="image-box-content" src="https://isofhcare.com/_next/image?url=https%3A%2F%2Fisofhcare-backup.s3-ap-southeast-1.amazonaws.com%2Fimages%2F15-png_f8b7b56a_b2eb_47af_aa27_36243ad5deaf.png&w=1920&q=75" alt="" />
                                                        </div>
                                                    </div>
                                                    <Link to={"/chi-tiet-dich-vu"}>
                                                        <h3>Khám Tai Mũi Họng với PGS Hoài An</h3>
                                                    </Link>
                                                </div>
                                                <div className="price">
                                                    1.562.000 đ
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Container className="justify-content-center">
                    <div className="row">
                        <div className="col col-xs-12 col-sm-8 col-xl-6 w-25">
                            <div className="w-100 h-100 position-relative d-flex align-items-center">
                                <div className="py-4 px-3">
                                    <div className="position-relative align-items-center d-flex justify-content-center logo">
                                        <img className="avatar" src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/test_b6fdadb7_445d_4a6a_ac5c_0ad3c31cdd67.png" alt="" />
                                    </div>
                                    <div className="info pt-3 pb-4 h-auto d-flex justify-content-between info">
                                        <h3 className="name">
                                            <Link to={"/chi-tiet-bac-si/"}>PGS.TS.  Phạm Thị Bích Đào</Link>
                                        </h3>
                                        <div className="specializations">Chuyên khoa Tai Mũi Họng </div>
                                    </div>
                                    <div className="price-info d-flex justify-content-center align-items-center flex-column ">
                                        <div className="price-title">Giá khám</div>
                                        <div className="price-detail text-align-right d-flex align-items-center justify-content-flex-end">5000000đ</div>
                                    </div>
                                    <div className="btn-footer">
                                        <Button className="w-100 d-flex align-items-center justify-content-center btn-footer-card">
                                            <Link to={"/chi-tiet-bac-si/"}>
                                                <span>Đặt khám</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3">
                            <div className="w-100 h-100 position-relative d-flex align-items-center">
                                <div className="py-4 px-3">
                                    <div className="position-relative align-items-center d-flex justify-content-center logo">
                                        <img className="avatar" src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/test_b6fdadb7_445d_4a6a_ac5c_0ad3c31cdd67.png" alt="" />
                                    </div>
                                    <div className="info pt-3 pb-4 h-auto d-flex justify-content-between info">
                                        <h3 className="name">
                                            <Link to={"/chi-tiet-bac-si/"}>PGS.TS.  Phạm Thị Bích Đào</Link>
                                        </h3>
                                        <div className="specializations">Chuyên khoa Tai Mũi Họng </div>
                                    </div>
                                    <div className="price-info d-flex justify-content-center align-items-center flex-column ">
                                        <div className="price-title">Giá khám</div>
                                        <div className="price-detail text-align-right d-flex align-items-center justify-content-flex-end">5000000đ</div>

                                    </div>
                                    <div className="btn-footer">
                                        <Button className="w-100 d-flex align-items-center justify-content-center btn-footer-card">
                                            <Link to={"/chi-tiet-bac-si/"}>
                                                <span>Đặt khám</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3">
                            <div className="w-100 h-100 position-relative d-flex align-items-center">
                                <div className="py-4 px-3">
                                    <div className="position-relative align-items-center d-flex justify-content-center logo">
                                        <img className="avatar" src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/test_b6fdadb7_445d_4a6a_ac5c_0ad3c31cdd67.png" alt="" />
                                    </div>
                                    <div className="info pt-3 pb-4 h-auto d-flex justify-content-between info">
                                        <h3 className="name">
                                            <Link to={"/chi-tiet-bac-si/"}>PGS.TS.  Phạm Thị Bích Đào</Link>
                                        </h3>
                                        <div className="specializations">Chuyên khoa Tai Mũi Họng </div>
                                    </div>
                                    <div className="price-info d-flex justify-content-center align-items-center flex-column ">
                                        <div className="price-title">Giá khám</div>
                                        <div className="price-detail text-align-right d-flex align-items-center justify-content-flex-end">5000000đ</div>

                                    </div>
                                    <div className="btn-footer">
                                        <Button className="w-100 d-flex align-items-center justify-content-center btn-footer-card">
                                            <Link to={"/chi-tiet-bac-si/"}>
                                                <span>Đặt khám</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3">
                            <div className="w-100 h-100 position-relative d-flex align-items-center">
                                <div className="py-4 px-3">
                                    <div className="position-relative align-items-center d-flex justify-content-center logo">
                                        <img className="avatar" src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/test_b6fdadb7_445d_4a6a_ac5c_0ad3c31cdd67.png" alt="" />
                                    </div>
                                    <div className="info pt-3 pb-4 h-auto d-flex justify-content-between info">
                                        <h3 className="name">
                                            <Link to={"/chi-tiet-bac-si/"}>PGS.TS.  Phạm Thị Bích Đào</Link>
                                        </h3>
                                        <div className="specializations">Chuyên khoa Tai Mũi Họng </div>
                                    </div>
                                    <div className="price-info d-flex justify-content-center align-items-center flex-column ">
                                        <div className="price-title">Giá khám</div>
                                        <div className="price-detail text-align-right d-flex align-items-center justify-content-flex-end">5000000đ</div>
                                    </div>
                                    <div className="btn-footer">
                                        <Button className="w-100 d-flex align-items-center justify-content-center btn-footer-card">
                                            <Link to={"/chi-tiet-bac-si/"}>
                                                <span>Đặt khám</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Container>
            </div>

        </div>
    )
}

export default AppHome;