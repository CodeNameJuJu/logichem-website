import React from "react";
import Nav from "./navigate";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className='navbar navbar-expand-sm bg-grad sticky-top'>
            <div className='container-fluid'>
                <Link className="navbar-brand text" to="/" title='Logichem Control'>
                    <img src="../Images/Logo.png" alt="Logichem Control Logo" style={{ height: "4rem", width: "auto" }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
                <div className='collapse navbar-collapse justify-content-end' id='collapsibleNavbar'>
                    <ul className='navbar-nav'>
                        <Nav name={'Home'} path={'/#home'} />
                        <Nav name={'Services'} path={'/#services'} />
                        <Nav name={'Industries'} path={'/#industries'} />
                        <Nav name={'Contact'} path={'/#contact'} />
                    </ul>
                </div>
            </div>
        </nav>
    );
}

