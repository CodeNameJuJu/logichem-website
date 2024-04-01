import React from "react";
import Nav from "./navigate";
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <nav className='navbar navbar-expand-sm bg-grad sticky-top'>
            <div className='container-fluid'>
                <Link className="navbar-brand text" to="/" title='Logichem Control'>
                    <img src="../Images/Merged.jpg" alt="#" style={{ height: "4rem", width: "120%"}}/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse justify-content-end' id='collapsibleNavbar'>
                    <ul className='nav'>
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
            </div>
        </nav>
    )
}