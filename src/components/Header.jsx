import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="py-5 px-8 flex justify-between items-center bg-slate-700 text-white">
            <div className="text-2xl font-bold">Logo</div>
            <ul className="flex items-center gap-6">
                <li>
                    <Link to="/" className="no-underline">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/skills" className="no-underline">
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="/portofolio" className="no-underline">
                        Portofolio
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="no-underline">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
