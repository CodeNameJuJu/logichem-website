import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Nav from "./navigate";

export default function Footer() {
    return (
        <footer className="diagonal-footer text-center text-white pt-1 mt-1 fadeIn-animation-up">
            <section>
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Logichem</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{
                                    width: "60px",
                                    height: "2px"
                                }}
                            />
                            <p>
                            We prioritize the delivery of high-quality engineering solutions tailored to client specifications, leveraging our extensive experience and upholding a strong commitment to transparency.
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Hours</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{
                                    width: "60px",
                                    height: "2px"
                                }}
                            />
                            <p>Mon 07:30 - 16:00</p>
                            <p>Tue 07:30 - 16:00</p>
                            <p>Wed 07:30 - 16:00</p>
                            <p>Thu 07:30 - 16:00</p>
                            <p>Fri 07:30 - 15:00</p>
                        </div>
                        <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Navigation</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{
                                    width: "60px",
                                    height: "2px"
                                }}
                            />
                            <ul>
                                <Nav name={'Home'} path={'/'} />
                                <Nav name={'Services'} path={'/Services'} />
                                <Nav name={'Projects'} path={'/Projects'} />
                                <Nav name={'Contact'} path={'/Contact'} />
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold">Contact</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{
                                    width: "60px",
                                    height: "2px"
                                }}
                            />
                            <p><i className="fas fa-home link-text pe-2"></i>
                                <a className="link-text" href='https://www.google.com/maps/dir//LogiChem+Control+(Pty)Ltd.+Lonehill+Office+Park+Block+E+20+Lonehill+Blvd,+Lone+Hill,+Sandton,+2062/@-26.0139124,28.0275992,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1e95714f1efddc43:0xd91e7c33dc7e664!2m2!1d28.0275992!2d-26.0139124?entry=ttu'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title='Address Link'>
                                    Lonehill Office Park, Block E, 20 Lonehill Blvd, Lone Hill, Sandton, 2062
                                </a>
                            </p>
                            <p><i className="fas fa-envelope mr-3 link-text pe-2"></i>
                                <a className="link-text" href='mailto:info@logichem.co.za'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title='Email Link'>
                                    info@logichem.co.za
                                </a>
                            </p>
                            <p><i className="fas fa-phone mr-3 link-text pe-2"></i>
                                <a className="link-text" href='tel:0114652718'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title='Phone Link'>
                                    011 465 2718
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="section-link text-center pb-5">
                © 2022 Copyright:
                <a className="section-link" href="/"> Logichem Control </a>
            </div>
        </footer>
    );
}
