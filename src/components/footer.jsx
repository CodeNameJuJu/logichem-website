import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';
import Nav from "./navigate";

export default function Footer() {
    return (
        <footer className="text-center text-white bg-blue">
            <section className="d-flex justify-content-between p-4"
            style={{ backgroundColor: "#edf2fc", }}>
                <div className="me-5 text">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <ul className="list-unstyled">
                        <Link to='https://www.linkedin.com/company/logichem-control-pty-ltd/about/' title="Logichem Control LinkedIn" target="blank">
                            <i className="bi bi-linkedin text" style={{ fontSize: "1.5rem", paddingRight: "5px", }}></i>
                        </Link>
                        <Link to='https://www.google.com/search?q=logichem+control&rlz=1C1GCEU_enZA1005ZA1005&oq=logichem+control&gs_lcrp=EgZjaHJvbWUqCwgAEEUYJxg7GIoFMgsIABBFGCcYOxiKBTIJCAEQIxgnGIoFMgkIAhAAGEMYigUyCQgDEAAYQxiKBTIJCAQQABhDGIoFMgkIBRAAGEMYigUyCQgGEAAYQxiKBTIJCAcQABhDGIoFMgkICBAAGEMYigUyCQgJEAAYQxiKBdIBCTM0NTZqMGoxNagCALACAA&sourceid=chrome&ie=UTF-8' title="Logichem Control Google Search" target="blank">
                            <i className="bi bi-google text" style={{ fontSize: "1.5rem", paddingLeft: "5px", }}></i>
                        </Link>
                    </ul>
                </div>
            </section>
            <section className="text-white">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Logichem</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{
                                    width: "60px",
                                    height: "2px"
                                }}
                            />
                            <p>
                                Here you can use rows and columns to organize your footer
                                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit.
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Hours</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{
                                    width: "60px",
                                    height: "2px"
                                }}
                            />
                            <p>
                                Mon 07:00 - 17:00
                            </p>
                            <p>
                                Tue 07:00 - 17:00
                            </p>
                            <p>
                                Wed 07:00 - 17:00
                            </p>
                            <p>
                                Thu 07:00 - 17:00
                            </p>
                            <p>
                                Fri 07:00 - 17:00
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Useful links(services)</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{
                                    width: "60px",
                                    height: "2px"
                                }}
                            />
                            <ul>
                                <Nav
                                    name={'Home'}
                                    path={'/'}
                                />
                                <Nav
                                    name={'Services'}
                                    path={'/Services'}
                                />
                                <Nav
                                    name={'Projects'}
                                    path={'/Projects'}
                                />
                                <Nav
                                    name={'Contact'}
                                    path={'/Contact'}
                                />
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold">Contact</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{
                                    width: "60px",
                                    color: '#3B5998',
                                    height: "2px"
                                }}
                            />
                            <p><i className="fas fa-home link-text pe-2"></i>
                                <a className="link-text" Lonehill href='https://www.google.com/maps/dir//LogiChem+Control+(Pty)Ltd.+Lonehill+Office+Park+Block+E+20+Lonehill+Blvd,+Lone+Hill,+Sandton,+2062/@-26.0139124,28.0275992,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1e95714f1efddc43:0xd91e7c33dc7e664!2m2!1d28.0275992!2d-26.0139124?entry=ttu'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title='Address Link'>
                                    Lonehill Office Park, Block E, 20 Lonehill Blvd, Lone Hill, Sandton, 2062
                                </a>
                            </p>
                            <p><i className="fas fa-envelope mr-3 link-text pe-2"></i>
                                <a className="link-text" href='mailto:info@identicalteeth.co.za'
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
            <div className="text-center pb-5">
                © 2022 Copyright:
                <a className="text-white" href="/"
                > Logichem Control </a>
            </div>
        </footer>
    )
}