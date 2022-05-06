import { useRedirectAdmin } from "../../hooks/redirect-hook-admin";

const AdminProject = () => {
    useRedirectAdmin();
    return (
        <>
            <p>Project Edit</p>
        </>
    );

};

export default AdminProject;