import React from "react";
import { HashLink } from 'react-router-hash-link';

export default function Nav({ name, path }) {
    return (
        <li className='nav-item'>
            <HashLink
                className='nav-link link-text'
                smooth to={path} // smooth scrolling enabled
                title={name}
            >
                {name}
            </HashLink>
        </li>
    );
}
