import { Link } from "react-router-dom";

export function MenuLink({ link, text }) {
    return (
        <Link to={link} className="menu-link">
            {text}
        </Link>
    );
}
