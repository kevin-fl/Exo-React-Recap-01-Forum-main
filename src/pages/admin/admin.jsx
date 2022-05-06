import { Link } from "react-router-dom";
import { useRedirectAdmin } from "../../hooks/redirect-hook-admin";

const Admin = () => {
    useRedirectAdmin();

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