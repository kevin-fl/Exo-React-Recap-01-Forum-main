import { Link } from "react-router-dom";
import { useRedirectNotAdmin } from "../../hooks/redirect-hook";

const Admin = () => {
    useRedirectNotAdmin();

    return (
        <>
            <ul>
                <li><Link to={'./projects'}>Projects</Link></li>
                <li>News</li>
                <li>Users</li>
            </ul>
        </>
    );
};

export default Admin;