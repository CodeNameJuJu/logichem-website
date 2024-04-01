import React from "react";
import { Link } from 'react-router-dom';

export default function Nav({ name, path }) {

    return (
        <li className='nav-item'>
            <Link
                className='nav-link link-text'
                to={path}
                title={name}
            >
                {name}
            </Link>
        </li>
    )
}