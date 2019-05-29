import React from 'react';
import { Link } from "react-router-dom";
import LogoutPage from '../pages/LogoutPage';

export default function Header() {
    return (
        <header>
            <Link to="/">
                <span>Logo</span>
            </Link>

            <div>
                <ul>
                    <li>
                        <Link to="/">
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <LogoutPage />
                    </li>
                </ul>
            </div>
        </header>
    )
};