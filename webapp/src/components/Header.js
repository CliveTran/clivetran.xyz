import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="nav">
            <code><Link to="/">~/clivetran.xyz</Link></code>
            <ul className="nav__menu">
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}